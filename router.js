const users = require("./database/JSONPlaceholder.json");
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', { users }); 
});

module.exports = router;