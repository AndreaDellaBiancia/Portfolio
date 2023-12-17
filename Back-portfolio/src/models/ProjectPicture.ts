import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Project from "./Project";

@Entity("ProjectPicture")
export default class ProjectPicture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @ManyToOne(() => Project, (project) => project.projectPictures)
  project: Project
}
