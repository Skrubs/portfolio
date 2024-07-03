import pool from '../db/index.js'
import express from 'express';
var router = express.Router();

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