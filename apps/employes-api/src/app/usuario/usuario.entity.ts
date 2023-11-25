
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { personal } from "../empleados/empleados.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column({name: 'id_cedula'})
    id_cedula: string

    @OneToOne(() => personal)
    @JoinColumn({ name: 'id_cedula' })
    personal: personal
}