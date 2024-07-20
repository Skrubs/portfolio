import pool from "../db/index.js";
import express from "express";
import bcryptjs from 'bcryptjs';


const router = express.Router();
const bcrypt = bcryptjs;

//THIS PATH IS FOR REGISTERING USERS
router.post('/register', (req, res) =>{
      const { username, email, password} = req.body;
      bcrypt.hash(password, 10)
          .then(hashedPassword => {
            return pool.query(
                'INSERT INTO user (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, hashedPassword]
            );
          })
          .then( result =>{
            res.status(201).json(result.rows[0]);
          })
          .catch(error =>{ res.status(500).json({error:'Error registering user'});
          });
});


router.post("/users", function (req, res, next) {
  console.log({ message: "users are here!" });
  return res.send("User posted");
  //To do
});

router.put("users/:id", function (req, res, next) {
  console.log("Updating user in table");
  //To do
});

router.delete("users/:id", function (req, res, next) {
    pool.query(
        "DELETE FROM userstable WHERE userid = $1",[id],
        (error, result) =>{
            if(error){
                throw new Error(`Error deleting USER`);
            }
        }
    );
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

router.get("/users", function (req, res, next) {
  console.log("Getting list of all users");
  pool.query("SELECT * FROM UserTable ORDER BY userid ASC", (error, result) => {
    if (error) {
      throw error;
    }
    res.send(result.rows);
  });
});

export default router;
