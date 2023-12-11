import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Experience from "./Experience";

@Entity("EffectOut")
export default class EffectOut {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @OneToMany(() => Experience, (experience) => experience.effectOut)
  experiences: Experience[]
}
