import {IsNumber, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto{
    @ApiProperty({example: 'Frontend-разработчик', description: 'Роль'})
    @IsString({message: 'Должно быть строкой'})
    readonly value: string

    @ApiProperty({example: '1', description: 'Уникальное значение пользователя'})
    @IsNumber({},{message: 'Должно быть числом'})
    readonly userId: number
}