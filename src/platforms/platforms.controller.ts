import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {PlatformsService} from "./platforms.service";
import {PlatformsEntity} from "./platforms.entity";
import {CreatePlatformDto} from "./dto/create-platform";

@ApiTags('Платформы')
@Controller('platforms')
export class PlatformsController {
    constructor(private platformService: PlatformsService) {}

    @ApiOperation({summary: 'Создание платформы'})
    @ApiResponse({status: 200, type: PlatformsEntity})
    @Post()
    create(@Body() dto: CreatePlatformDto){
        return this.platformService.createPlatform(dto)
    }

    @ApiOperation({summary: 'Получение всех платформ'})
    @ApiResponse({status: 200, type: [PlatformsEntity]})
    @Get()
    getAll(){
        return this.platformService.getAllPlatforms()
    }
}
