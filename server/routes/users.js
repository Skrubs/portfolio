import pool from "../db/index.js";
import express from "express";
import bcryptjs from 'bcryptjs';

const router = express.Router();
const bcrypt = bcryptjs;

// Registering users
router.post('/register', (req, res) => {
    const {username, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then(hashedPassword => {
            return pool.query(
                'INSERT INTO UserTable (username, email, password) VALUES ($1, $2, $3) RETURNING *',
                [username, email, hashedPassword]
            );
        })
        .then(result => {
            res.status(201).json(result.rows[0]);
        })
        .catch(error => {
            console.error("error registering user", error);
            res.status(500).json({ error: 'Error registering user' });
        });
});


    router.post('/checkUser', async (req, res) => {
        const { username } = req.body;
            try     {
                const user = await pool.query('SELECT 1 FROM userTable WHERE username = $1', [username]);
                if (user.rowCount > 0) {
                    return res.json({ exists: true });
                }
                res.json({ exists: false });
            } catch (error) {
                console.error('Database query error:', error);
                res.status(500).json({ error: 'Internal Server Error' });
        }
    });


// Post a user (example endpoint)
router.post("/users", (req, res) => {
    console.log({ message: "users are here!" });
    res.send("User posted");
    // To do
});

// Update user information by id
router.put("/users/:id", async (req, res) => {
    console.log(`Request to update user: ${req.params.id}`);
    const id = parseInt(req.params.id);
    const {firstname, lastname, password, email, theme, state} = req.body;

    if (isNaN(id)) {
        return res.status(500).json({ error: `Invalid user ID ${id}` });
    }

    try {
        let query = 'UPDATE UserTable SET';
        const values = [];
        let paramIndex = 1;
        
        if (firstname) {
            console.log(`Retrieved first name: ${firstname}`);
            query += ` firstname = $${paramIndex}`;
            values.push(firstname);
            paramIndex += 1;
        }
        if (lastname) {
            console.log(`Retrieved last name: ${lastname}`);
            if (values.length > 0) {
                query += ',';
            }
            query += ` lastname = $${paramIndex}`;
            values.push(lastname);
            paramIndex += 1;
        }
        if (email) {
            console.log(`Retrieved email: ${email}`);
            if (values.length > 0) {
                query += ',';
            }
            query += ` email = $${paramIndex}`;
            values.push(email);
            paramIndex += 1;
        }
        if (theme) {
            console.log(`Retrieved theme: ${theme}`);
            if (values.length > 0) {
                query += ',';
            }
            query += ` theme = $${paramIndex}`;
            values.push(theme);
            paramIndex += 1;
        }
        if (state) {
            console.log(`Retrieved state: ${state}`);
            if (values.length > 0) {
                query += ',';
            }
            query += ` state = $${paramIndex}`;
            values.push(state);
            paramIndex += 1;
        }
        if (password) {
            console.log(`Retrieved password: ${password}`);
            if (values.length > 0) {
                query += ',';
            }
            query += ` password = $${paramIndex}`;
            values.push(await bcrypt.hash(password, 10));
        }

        query += ` WHERE userid = $${paramIndex + 1} RETURNING *`;
        values.push(id);

        console.log(query);
        console.log(values);

        const result = await pool.query(query, values);

        console.log("User password updated.");
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete user by id
router.delete("/users/:id", (req, res) => {
    console.log(`Request to delete user by id value: ${req.params.id}`);
    const id = parseInt(req.params.id);
    pool.query(
        "DELETE FROM UserTable WHERE userid = $1", [id],
        (error, result) => {
            if (error) {
                res.status(500).json({ error: 'Error deleting user' });
                return;
            }
            res.status(204).send(); // No content
        }
    );
});

// New route for deleting all users
router.delete('/delete_all', async (req, res) => {
    console.log("Request to delete all users");
    try {
        await pool.query('DELETE FROM UserTable');
        res.status(200).json({ message: 'All users deleted successfully' });
    } catch (error) {
        console.error('Error deleting all users:', error);
        res.status(500).json({ error: 'Error deleting all users' });
    }
});


// Get user by id value
router.get("/users/:id", (req, res) => {
  console.log(`Request to get user by id value: ${req.params.id}`);
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM UserTable WHERE userid = $1", [id],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.send(result.rows);
    },
  );
});

// Get all users
router.get("/users", (req, res) => {
    console.log("Request to get list of all users");
    pool.query("SELECT * FROM UserTable ORDER BY userid ASC", (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error fetching users' });
            return;
        }
        res.json(result.rows);
    });
});

export default router;
