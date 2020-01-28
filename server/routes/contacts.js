const express = require("express");
const router = express.Router();

// route: GET api/contacts
// description: get all user's contacts
// access: private
router.get("/", (req, res) => res.send("get all user's contacts"));

// route: POST api/contacts
// description: add new contact
// access: private
router.post("/", (req, res) => res.send("add new contact"));

// route: PUT api/contacts
// description: update a contact
// access: private
//      PUT methods are a bit different
//      You need to define what you want to update
//      to note it generically you just use '/:id'
router.put("/:id", (req, res) => res.send("update contact"));

// route: DELETE api/contacts
// description: delete a contact
// access: private
router.delete("/:id", (req, res) => res.send("delete contact"));

module.exports = router;
