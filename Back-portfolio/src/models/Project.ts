import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable
} from "typeorm";
import ProjectPicture from "./ProjectPicture";
import ProjectTarget from "./ProjectTarget";
import LogoTechno from "./LogoTechno";

@Entity("Project")
export default class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar", nullable: true })
  picture: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "varchar" })
  gitHubLink: string;

  @Column({ type: "varchar", nullable: true })
  siteLink: string;
  

  @OneToMany(() => ProjectPicture, (projectPicture) => projectPicture.project, { nullable: true } )
  projectPictures: ProjectPicture[]

  @OneToMany(() => ProjectTarget, (projectTarget) => projectTarget.project, { nullable: true })
  projectTargets: ProjectTarget[]

  @ManyToMany(() => LogoTechno)
  @JoinTable()
  logosTechno: LogoTechno[];
 
}
