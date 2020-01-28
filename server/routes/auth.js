const express = require("express");
const router = express.Router();

// route: GET api/auth
// description: get logged in user
// access: private
router.get("/", (req, res) => res.send("get logged in user"));

// route: POST api/auth
// description: auth user and get token
// access: public
router.post("/", (req, res) => res.send("login user"));

module.exports = router;
