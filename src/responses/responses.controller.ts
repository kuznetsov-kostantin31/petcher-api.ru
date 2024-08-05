import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {ResponsesService} from "./responses.service";
import {CreateResponseDto} from "./dto/create-response";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ResponsesEntity} from "./responses.entity";
import {UpdateResponseDto} from "./dto/update-response";

@ApiTags('Отлики')
@Controller('responses')
export class ResponsesController {
    constructor(private responsesService: ResponsesService) {}

    @ApiOperation({summary: 'Создание отклика'})
    @ApiResponse({status: 200, type: ResponsesEntity})
    @Post()
    create(@Body() dto: CreateResponseDto){
        return this.responsesService.create(dto)
    }

    @ApiOperation({summary: 'Обновление статуса отклика'})
    @ApiResponse({status: 200, type: ResponsesEntity})
    @Patch('/:id')
    update(@Param('id') id: number, @Body() dto: UpdateResponseDto){
        return this.responsesService.update(+id, dto)
    }

    @ApiOperation({summary: 'Получение всех откликов'})
    @ApiResponse({status: 200, type: [ResponsesEntity]})
    @Get()
    getAll(){
        return this.responsesService.getAll()
    }
}
