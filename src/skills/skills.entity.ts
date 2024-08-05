import {ApiProperty} from "@nestjs/swagger";


export class SkillsEntity{
    @ApiProperty({example: '1', description: 'Уникальный айди скилла'})
    id: number;

    @ApiProperty({example: 'Figma', description: 'Название скилла'})
    name: string;

    @ApiProperty({example: '1', description: 'Уникальный айди роли'})
    roleId: number
}