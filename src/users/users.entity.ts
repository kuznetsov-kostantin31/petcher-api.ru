import {ApiProperty} from "@nestjs/swagger";

export class UsersEntity{
    @ApiProperty({example: '1', description: 'Уникальный айди пользователя'})
    id: number;

    @ApiProperty({example: 'Александр Довжик', description: 'Имя'})
    name: string;

    @ApiProperty({example: 'ausdam', description: 'Логин'})
    login: string;

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    email: string;

    @ApiProperty({example: 'DFj34-fjkHJKd', description: 'Пароль'})
    password: string;

    @ApiProperty({example: 'Люблю веб-дизайн, 17 лет', description: 'Описание профиля'})
    description: string;

    @ApiProperty({example: '*картиночка*', description: 'Аватарка'})
    url: string;

    @ApiProperty({example: 'true', description: 'Забанен или нет'})
    banned: boolean;

    @ApiProperty({example: 'За экстремизм', description: 'Причина бана'})
    banReason: string;
}