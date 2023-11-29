import { Entity, Column, PrimaryColumn, OneToOne } from "typeorm";
import { User } from "../usuario/usuario.entity";

@Entity()
export class personal {

    @PrimaryColumn()
    cedula: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    telefono: string;

    @Column()
    direccion: string;

    @Column()
    correo: string;

    @Column()
    edad: number;

    @Column({ name: 'fecha_nacimiento', type: 'date'})
    fechaNacimiento: Date;

    @Column({name: 'fecha_ingreso', type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    fechaIngreso: Date;

    @OneToOne(() => User, (User) => User.id_cedula)
    user: User;

}