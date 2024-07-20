import {Column, DataType, Table, Model, BelongsToMany, ForeignKey, BelongsTo} from "sequelize-typescript";
import {ApiProduces, ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";
import {Sphere} from "../spheres/spheres.model";


interface RoleCreationAttrs{
    value: string;
}
@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs>{
    @ApiProperty({example: '1', description: 'Уникальный айди пользователя'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Уникальное значение роли'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string;

    @ForeignKey(() => Sphere)
    @ApiProperty({example: '1', description: 'Уникальный айди сферы'})
    @Column({type: DataType.NUMBER, allowNull: false})
    sphereId: number;

    @BelongsTo(() => Sphere)
    sphere: Sphere;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}