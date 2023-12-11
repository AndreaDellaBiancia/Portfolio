import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import EffectIn from "./EffectIn";
import EffectOut from "./EffectOut";
import LogoTechno from "./Image";
import Image from "./Image";

@Entity("Experience")
export default class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

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

  @ManyToOne(() => EffectIn, (effectIn) => effectIn.experiences)
  effectIn: EffectIn;

  @ManyToOne(() => EffectOut, (effectOut) => effectOut.experiences)
  effectOut: EffectOut;

  @ManyToMany(() => Image)
  @JoinTable()
  images: Image[];
}
