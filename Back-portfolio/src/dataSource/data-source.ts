import { DataSource } from "typeorm";
import Experience from "../models/Experience";
import LogoTechno from "../models/LogoTechno";
import Project from "../models/Project";
import ProjectPicture from "../models/ProjectPicture";
import ProjectTarget from "../models/ProjectTarget";
import ProjectFunctionality from "../models/ProjectFunctionality";

require("dotenv").config();

export const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "portfolio",
  password: "portfolio",
  database: "portfolio",
  synchronize: true,
  entities: [Experience, LogoTechno, Project, ProjectPicture, ProjectTarget, ProjectFunctionality],
  logging: ["query", "error"],
});
