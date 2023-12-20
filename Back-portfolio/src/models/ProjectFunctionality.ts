import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Project from "./Project";

@Entity("ProjectFunctionality")
export default class ProjectFunctionality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;


  @ManyToOne(() => Project, (project) => project.projectFunctionalities)
  project: Project
}
