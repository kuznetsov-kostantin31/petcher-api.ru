import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateSphereDto{
    @ApiProperty({example: 'Веб-разработка', description: 'Название сферы'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string;
}