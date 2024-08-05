import {ApiProperty} from "@nestjs/swagger";

export class PlatformsEntity {
    @ApiProperty({example: '1', description: 'Уникальный айди платформы'})
    id: number;

    @ApiProperty({example: 'Веб-приложение', description: 'Название платформы'})
    name: string;
}