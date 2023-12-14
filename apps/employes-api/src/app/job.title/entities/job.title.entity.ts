import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Person } from "../../employe/entities/employe.entity";

@Entity()
export class JobTitle {

    @PrimaryColumn()
    name: string;
 
    @Column({default: "Por describir"})
    description: string;

    @Column({default: "Por asignar"})
    responsibility: string;
 
    @OneToMany(() => Person, (Person) => Person.jobtitle)
    person: Person[];

    @DeleteDateColumn()
    deleteAT: Date;
}