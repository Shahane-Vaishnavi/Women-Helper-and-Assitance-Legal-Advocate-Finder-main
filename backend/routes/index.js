const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Women Helper and Assistance API" });
});

module.exports = router;

