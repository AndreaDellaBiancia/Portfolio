import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Experience from "./Experience";

@Entity("EffectIn")
export default class EffectIn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @OneToMany(() => Experience, (experience) => experience.effectIn)
  experiences: Experience[]
}
