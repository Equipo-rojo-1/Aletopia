import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, DeleteDateColumn } from "typeorm";
import { Person } from "../../employe/entities/employe.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    username: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false })
    cedula: string;

    @OneToOne(() => Person)
    @JoinColumn({ name: 'cedula' })
    personal: Person;

    @DeleteDateColumn()
    deleteAT: Date;
}