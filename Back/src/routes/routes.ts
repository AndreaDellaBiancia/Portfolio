const express = require("express");

const ExperienceController = require("../controllers/ExperienceController");


const router = express.Router();



// Routes Admin
router.get("/", ExperienceController.getExperiences);


module.exports = router;
