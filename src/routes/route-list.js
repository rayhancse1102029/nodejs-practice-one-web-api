const express = require('express');
const HomeController = require("../controllers/HomeController");
const router = express.Router();


router.get("/index", HomeController.Index)
router.get("/about", HomeController.About)


module.exports = router;