import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("LogoTechno")
export default class LogoTechno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;
}
