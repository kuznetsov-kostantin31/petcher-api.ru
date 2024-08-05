import {Body, Controller, Get, Post} from '@nestjs/common';
import {ProjectsService} from "./projects.service";
import {CreateProjectDto} from "./dto/create-project";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ProjectsEntity} from "./projects.entity";

@ApiTags('Проекты')
@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

    @ApiOperation({summary: 'Создание отклика'})
    @ApiResponse({status: 200, type: ProjectsEntity})
    @Post()
    create(@Body() dto: CreateProjectDto) {
        return this.projectsService.create(dto);
    }

    @ApiOperation({summary: 'Получение всех проектов'})
    @ApiResponse({status: 200, type: [ProjectsEntity]})
    @Get()
    findAll() {
        return this.projectsService.getAll();
    }
}
