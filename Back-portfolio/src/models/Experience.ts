import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import EffectIn from "./EffectIn";
import EffectOut from "./EffectOut";
import LogoTechno from "./LogoTechno";

@Entity("Experience")
export default class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  imgTitle: string;

  @Column({ type: "varchar" })
  imgTitleSize: string;

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

  @ManyToMany(() => LogoTechno)
  @JoinTable()
  logosTechno: LogoTechno[];
}
