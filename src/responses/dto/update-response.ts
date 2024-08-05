import {ApiProperty} from "@nestjs/swagger";
import {State} from "@prisma/client";


export class UpdateResponseDto{
    @ApiProperty({example: '1', description: 'Уникальное айди отклика'})
    readonly id: number;

    @ApiProperty({example: 'На рассмотрении', description: 'Состояние отклика'})
    readonly state: State;
}