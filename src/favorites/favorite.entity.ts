import {ApiProperty} from "@nestjs/swagger";

export class FavoriteEntity {
    @ApiProperty({example: '1', description: 'Уникальный айди избранного'})
    id: number;

    @ApiProperty({example: '1', description: 'Уникальное айди проекта'})
    projectId: number;

    @ApiProperty({example: '1', description: 'Уникальный айди пользователя'})
    userId: number;
}
