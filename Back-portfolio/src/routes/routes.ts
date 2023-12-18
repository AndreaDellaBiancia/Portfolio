const express = require("express");

const ExperienceController = require("../controllers/ExperienceController");
const ProjectController = require("../controllers/ProjectController");


const router = express.Router();

router.get("/", ExperienceController.getExperiences);
router.get("/projects", ProjectController.getProjects);


module.exports = router;
