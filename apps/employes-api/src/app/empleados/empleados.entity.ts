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

    @Column({ name: 'fecha_nacimiento', type: 'date'})
    fechaNacimiento: Date;

    @OneToOne(() => User, (User) => User.id_cedula)
    user: User

}