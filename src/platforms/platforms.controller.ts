import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {PlatformsService} from "./platforms.service";
import {Platform} from "./platforms.model";
import {CreatePlatformDto} from "./dto/create-platform";
import {User} from "../users/users.model";
import {Roles} from "../auth/role-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";

@ApiTags('Платформы')
@Controller('platforms')
export class PlatformsController {
    constructor(private platformService: PlatformsService) {}

    @ApiOperation({summary: 'Создание платформы'})
    @ApiResponse({status: 200, type: Platform})
    @Post()
    create(@Body() dto: CreatePlatformDto){
        return this.platformService.createPlatform(dto)
    }

    @ApiOperation({summary: 'Получение всех платформ'})
    @ApiResponse({status: 200, type: [Platform]})
    @Get()
    getAll(){
        return this.platformService.getAllPlatforms()
    }
}
