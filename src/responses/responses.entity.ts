import {ApiProperty} from "@nestjs/swagger";
import {State} from "@prisma/client";

export class ResponsesEntity{
    @ApiProperty({example: '1', description: 'Уникальный айди отклика'})
    id: number;

    @ApiProperty({example: '1', description: 'Уникальное айди проекта'})
    projectId: number;

    @ApiProperty({example: '1', description: 'Уникальный айди пользователя'})
    userId: number;

    @ApiProperty({example: 'waiting', description: 'Состояние отклика'})
    State: State;
}