import pool from '../db/index.js'
import express from 'express';
const router = express.Router();

  //Middleware might need to be moved somewhere else to handle the other routes, 
  //used to check session and if not valid will redirect user to the login page
  const isAuthenticated = function(req, res, next) {
    console.log(req.session.user);
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
  };

  //Testing function, creates random entries into the database
  //WILL BE DELETED IN PRODUCTION
  router.get('/usersTEST', async function(req, res, next) {
    console.log("Testing for adding premade user into table...");
    var random_account = (Math.random() + 1).toString(36).substring(7);
    var random_email = (Math.random() + 1).toString(36).substring(7);
    try {
        await pool.query(`INSERT INTO UserTable (firstname, lastname, username, password, email, country, state) VALUES ('Random', 'Person', '${random_account}', '123', '${random_email}', 'USA', 'VA');`);
        await pool.query(`INSERT INTO UserProfile (userid, bio, education) VALUES ((SELECT userid FROM UserTable WHERE username = '${random_account}'), 'nothing about me', 'no education');`);
        await pool.query(`INSERT INTO Projects (userid, projectname, projectdesc, projecturl) VALUES ((SELECT userid FROM UserTable WHERE username = '${random_account}'), 'test1', 'Description for test1', 'http://example.com/test1');`);
        await pool.query(`INSERT INTO Projects (userid, projectname, projectdesc, projecturl) VALUES ((SELECT userid FROM UserTable WHERE username = '${random_account}'), 'test2', 'Description for test2', 'http://example.com/test2');`);
      } catch (error) {
        console.log('Error creating user:', error)
      }
      console.log(`Added user account: ${random_account}`);
      await pool.query(`SELECT u.username, p.projectname, p.projectdesc, p.projecturl FROM UserTable u JOIN Projects p ON u.userid = p.userid WHERE u.username = '${random_account}';`, (error, result) => {
        if (error) {
          throw error
        }
        res.send(result.rows)
      })
  });

  //To do build out, most likely needs to go into userprofile.js
  router.get('/profile', isAuthenticated, function(req, res) {
    console.log("Profile Test Reply");
    //res.redirect('/account');
  });

  //To do handling routine to login page if needed
  router.get("/login", function(req, res) {
    console.log("Login Test Reply");
  });

  //Basic login testing function. To test via command line using curl, do this command and replace the USERANME and PASSWORD with valid credentials.
  //You need to ensure that the -c cookie.txt is used to save the session:
  //curl -X POST http://localhost:9000 -H "Content-Type: application/json" -d "{\"username\":\"USERNAME\", \"password\":\"PASSWORD\"}" -c cookie.txt
  //You should get back via the command line 'Login successful'.
  //To verify, you supply the cookie as follows and the 'Already logged in' should be returned since you are using the same session:
  //curl -X POST http://localhost:9000 -H "Content-Type: application/json" -d "{\"username\":\"USERNAME\", \"password\":\"PASSWORD\"}" -b cookie.txt
  //In production, cookies will be handled via front-end and back-end communication - eventually passwords need to be bcrypt
  router.post('/login', async function(req, res) {
    const { username, password } = req.body;
    if (req.session.user) {
        return res.send('Already logged in');
    }
    try {
        const result = await pool.query('SELECT * FROM UserTable WHERE username = $1 AND password = $2', [username, password]);
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        req.session.user = result.rows[0];
        res.cookie("sessionId", req.sessionID);
        req.session.save();
        res.json({ message: 'Login successful' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.post('/users', function(req, res, next) {
    console.log("Adding user into table");
    //To do
  });

  router.put('users/:id', function(req, res, next) {
    console.log("Updating user in table");
    //To do
  });

  router.delete('users/:id', function(req, res, next) {
    console.log("Deleting user from table");
    //To do
  });

  router.get('/users/:id', function(req, res, next) {
    console.log(`Getting users by id value: ${req.params.id}`);
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM UserTable WHERE userid = $1', [id], (error, result) => {
      if (error) {
        throw error
      }
      res.send(result.rows)
    })
  });

  router.get('/users', function(req, res, next) {
    console.log("Getting list of all users");
    pool.query('SELECT * FROM UserTable ORDER BY userid ASC', (error, result) => {
      if (error) {
        throw error
      }
      res.send(result.rows)
    })
  });

export default router