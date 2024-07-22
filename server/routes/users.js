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
                'INSERT INTO usertable (username, email, password) VALUES ($1, $2, $3) RETURNING *',
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

// Post a user (example endpoint)
router.post("/users", (req, res) => {
    console.log({ message: "users are here!" });
    res.send("User posted");
    // To do
});

// Update user by id
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    console.log("Updating user in table");
    // To do
});

// Delete user by id
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    pool.query(
        "DELETE FROM user WHERE userid = $1", [id],
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
    try {
        await pool.query('DELETE FROM UserTable');
        res.status(200).json({ message: 'All users deleted successfully' });
    } catch (error) {
        console.error('Error deleting all users:', error);
        res.status(500).json({ error: 'Error deleting all users' });
    }
});



router.get("/users/:id", function (req, res, next) {
  console.log(`Getting users by id value: ${req.params.id}`);
  const id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM UserTable WHERE userid = $1",
    [id],
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
    console.log("Getting list of all users");
    pool.query("SELECT * FROM user ORDER BY userid ASC", (error, result) => {
        if (error) {
            res.status(500).json({ error: 'Error fetching users' });
            return;
        }
        res.json(result.rows);
    });
});

export default router;
