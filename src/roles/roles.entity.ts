import {ApiProperty} from "@nestjs/swagger";

export class RolesEntity{
    @ApiProperty({example: '1', description: 'Уникальный айди пользователя'})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Уникальное значение роли'})
    value: string;
}