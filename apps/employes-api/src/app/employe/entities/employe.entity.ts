import { JobTitle } from '../../job.title/entities/job.title.entity';
import { Entity, Column, PrimaryColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Person {
  @PrimaryColumn({ nullable: false })
  cedula: string;

  @Column({ nullable: false })
  nombre: string;

  @Column({ nullable: false })
  apellido: string;

  @Column({ default: '00000000000' })
  telefono: string;

  @Column({ default: 'UNICA' })
  direccion: string;

  @Column({ unique: true, nullable: false })
  correo: string;

  @Column({ name: 'fecha_nacimiento', type: 'date' })
  fechaNacimiento: Date;
 
  @Column({
    name: 'fecha_ingreso',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fechaIngreso: Date;

  @OneToOne(() => User, (User) => User.cedula)
  user: User;

  @Column()
  jobtitle: string;

  @ManyToOne(() => JobTitle, (JobTitle) => JobTitle.person)
  @JoinColumn({name: 'jobtitle'})
  jobTitle: JobTitle;
}