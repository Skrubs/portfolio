import express from "express";
var router = express.Router();

//to do for user profile table creating, updating, searching, and deleting

router.post("/userprofile", function (req, res, next) {
  console.log("Adding userprofile into table");
  //To do
});

router.put("userprofile/:id", function (req, res, next) {
  console.log("Updating userprofile in table");
  //To do
});

router.delete("userprofile/:id", function (req, res, next) {
  console.log("Deleting userprofile from table");
  //To do
});

router.get("userprofile/:id", function (req, res, next) {
  console.log(`Getting userprofile by id value: ${req.params.id}`);
  //To do
});

router.get("/userprofile", function (req, res, next) {
  res.render("index", { title: "Placeholder for User Profiles" });
});

export default router;
