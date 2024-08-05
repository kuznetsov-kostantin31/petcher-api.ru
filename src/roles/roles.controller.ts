import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRoleDto} from "./dto/create-role.dto";
import * as diagnostics_channel from "diagnostics_channel";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {RolesEntity} from "./roles.entity";

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: 'Создание роли'})
    @ApiResponse({status: 200, type: RolesEntity})
    @Post()
    create(@Body() dto: CreateRoleDto){
        return this.roleService.createRole(dto)
    }

    @Get('/:name')
    getByValue(@Param('name') name: string){
        return this.roleService.getRoleByValue(name)
    }

    @ApiOperation({summary: 'Получение всех ролей'})
    @ApiResponse({status: 200, type: [RolesEntity]})
    @Get()
    getAll(){
        return this.roleService.getAllRoles()
    }
}
