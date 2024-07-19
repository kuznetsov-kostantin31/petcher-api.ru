import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreatePlatformDto{
    @ApiProperty({example: 'Веб-приложение', description: 'Название платформы'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string;
}