import {ApiProperty} from "@nestjs/swagger";
import { State } from '@prisma/client';


export class CreateResponseDto{
    @ApiProperty({example: '1', description: 'Уникальное айди проекта'})
    readonly projectId: number;

    @ApiProperty({example: '1', description: 'Уникальный айди пользователя'})
    readonly userId: number;

    @ApiProperty({example: 'На рассмотрении', description: 'Состояние отклика'})
    readonly state: State;
}