import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface SphereCreationAttrs{
    name: string;
}

@Table({tableName: 'spheres'})
export class Sphere extends Model<Sphere, SphereCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный айди сферы'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Веб-разработка', description: 'Название сферы'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;
}