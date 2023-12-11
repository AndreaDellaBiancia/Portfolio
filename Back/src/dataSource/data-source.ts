import { DataSource } from "typeorm";
import Experience from "../models/Experience";
import EffectIn from "../models/EffectIn";
import EffectOut from "../models/EffectOut";
import LogoTechno from "../models/Image";

require("dotenv").config();

export const dataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "portfolio",
  password: "portfolio",
  database: "portfolio",
  synchronize: true,
  entities: [Experience, EffectIn, EffectOut, LogoTechno],
  logging: ["query", "error"],
});
