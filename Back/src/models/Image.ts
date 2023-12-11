import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Image")
export default class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  size: string;
}
