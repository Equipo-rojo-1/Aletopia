import { Entity, Column, PrimaryColumn, OneToOne, OneToMany, JoinColumn, DeleteDateColumn } from 'typeorm';
import { JobTitle } from '../../job.title/entities/job.title.entity';
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

  @Column({ default: 'Dirección Unica' })
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

  @Column({nullable: false})
  jobtitle: string;

  @OneToMany(() => JobTitle, (JobTitle) => JobTitle.name )
  @JoinColumn({name: 'jobtitle'})
  jobTitle: JobTitle;
 
  @OneToOne(() => User, (User) => User.cedula)
  user: User;
  
  @DeleteDateColumn()
  deleteAT: Date;
}