import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from "typeorm";

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

    @DeleteDateColumn()
    deleteAT: Date;
}