import {ApiProperty} from "@nestjs/swagger";

export class CreateFavoriteDto {
    @ApiProperty({example: '1', description: 'Уникальное айди проекта'})
    readonly projectId: number;

    @ApiProperty({example: '1', description: 'Уникальный айди пользователя'})
    readonly userId: number;
}
