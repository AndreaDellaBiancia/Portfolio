import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from "typeorm";
import LogoTechno from "./LogoTechno";
import Project from "./Project";

@Entity("Experience")
export default class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  imgTitle: string;

  @Column({ type: "varchar" })
  subtitle: string;

  @Column({ type: "text" })
  content: string;

  @Column({ type: "varchar" })
  margin: string;

  @Column({ type: "int" })
  scrollPositionEffect: number;

  @Column({ type: "varchar" })
  side: string;

  @Column({ type: "int" })
  position: number;

  @ManyToMany(() => LogoTechno)
  @JoinTable()
  logosTechno: LogoTechno[];

  @OneToOne(() => Project)
  @JoinColumn()
  project: Project | null
}
