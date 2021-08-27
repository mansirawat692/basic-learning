import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User{

@PrimaryGeneratedColumn()
id: number

@Column()
firstName: string

@Column()
email: string

@Column()
pass:string

// @Column()
// pass1:string

// @Column()
// isActive: boolean


}