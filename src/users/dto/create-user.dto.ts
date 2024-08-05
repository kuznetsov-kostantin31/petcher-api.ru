import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto{

    @ApiProperty({example: 'Александр Довжик', description: 'Имя'})
    @IsString({message: 'Должно быть строкой'})
    readonly name: string;

    @ApiProperty({example: 'ausdam', description: 'Логин'})
    @IsString({message: 'Должно быть строкой'})
    readonly login: string;

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string;

    @ApiProperty({example: 'DFj34-fjkHJKd', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16 символов'})
    readonly password: string;

    @ApiProperty({example: 'Люблю веб-дизайн, 17 лет', description: 'Описание профиля'})
    @IsString({message: 'Должно быть строкой'})
    @Length(0, 150, {message: 'Не больше 150 символов'})
    readonly description: string;

    @ApiProperty({example: '*картиночка*', description: 'Аватарка'})
    @IsString({message: 'Должно быть строкой'})
    readonly url: string;
}