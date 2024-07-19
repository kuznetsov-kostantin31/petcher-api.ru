import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

interface PlatformCreationAttrs{
    name: string;
}

@Table({tableName: 'platforms'})
export class Platform extends Model<Platform, PlatformCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный айди платформы'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Веб-приложение', description: 'Название платформы'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;
}