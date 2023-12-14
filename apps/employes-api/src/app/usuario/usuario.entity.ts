import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, DeleteDateColumn } from "typeorm";
import { personal } from "../empleados/empleados.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    username: string;

    @Column({ nullable: false })
    password: string;

    @Column({ name: 'id_cedula' })
    id_cedula: string;

    @OneToOne(() => personal)
    @JoinColumn({ name: 'id_cedula' })
    personal: personal;

    @DeleteDateColumn()
    deleteAT: Date;
}