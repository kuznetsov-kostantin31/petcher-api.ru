import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class CreateProjectDto{
    @ApiProperty({example: 'Petcher', description: 'Название проекта'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string;

    @ApiProperty({example: 'Petcher - это платформа которая позволяет...', description: 'Описание проекта'})
    @IsString({message: 'Должно быть строкой'})
    readonly description: string;

    @ApiProperty({example: 'На данный момент уже готово...', description: 'Комментарий к проекту'})
    @IsString({message: 'Должно быть строкой'})
    readonly comment: string;

    @ApiProperty({example: "1", description: "Айди пользователя создавшего проект"})
    @IsNumber()
    readonly teamleadId: number
}