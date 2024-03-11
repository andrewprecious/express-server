const { Router } = require("express");
router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/services", (req, res) => {
  res.render("services");
});

module.exports = router;
