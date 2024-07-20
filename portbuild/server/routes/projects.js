import pool from "../db/index.js";
import express from "express";


const router = express.Router();

//to do for project table creating, updating, searching, and deleting

router.post("/projects", function (req, res, next) {
  console.log("Adding project into table");
  //To do
});

router.put("projects/:id", function (req, res, next) {
  console.log("Updating project in table");
  //To do
});

router.delete("projects/:id", function (req, res, next) {
  console.log("Deleting project from table");
  //To do
});

router.get("projects/:id", function (req, res, next) {
  console.log(`Getting project by id value: ${req.params.id}`);
  //To do
});

router.get("/projects", function (req, res, next) {
  res.render("index", { title: "Placeholder for Projects" });
});

export default router;
