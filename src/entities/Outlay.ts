import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Outlay {
    
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    describe: string;

    @Column()
    value: number;

    @Column()
    expire_date: number;
}