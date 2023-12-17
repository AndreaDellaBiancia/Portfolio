import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Project from "./Project";

@Entity("ProjectTarget")
export default class ProjectTarget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;


  @ManyToOne(() => Project, (project) => project.projectTargets)
  project: Project
}
