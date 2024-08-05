import {Controller, Get, Param} from '@nestjs/common';
import {SkillsService} from "./skills.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {SkillsEntity} from "./skills.entity";

@ApiTags('Скиллы')
@Controller('skills')
export class SkillsController {
    constructor(private skillsService: SkillsService) {}

    @ApiOperation({summary: 'Получение всех скиллов'})
    @ApiResponse({status: 200, type: [SkillsEntity]})
    @Get()
    getAll(){
        return this.skillsService.getAllSkills()
    }
    @ApiOperation({summary: 'Получение скиллов по айди роли'})
    @ApiResponse({status: 200, type: [SkillsEntity]})
    @Get('/:roleId')
    getAllByRoleId(@Param('roleId') roleId: number){
        return this.skillsService.getAllSkillsByRoleId(+roleId)
    }
}
