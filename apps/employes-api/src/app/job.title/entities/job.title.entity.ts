import { Column, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Person } from "../../employe/entities/employe.entity";

@Entity()
export class JobTitle {

    @PrimaryColumn()
    name: string;
 
    @Column()
    description: string;

    @Column()
    responsibility: string;
 
    @ManyToMany(() => Person, person => person.jobtitle)
    @JoinTable()
    person: Person[];

    @DeleteDateColumn()
    deleteAT: Date;
}