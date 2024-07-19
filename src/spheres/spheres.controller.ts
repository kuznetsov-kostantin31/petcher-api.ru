import {Body, Controller, Post} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {SpheresService} from "./spheres.service";
import {CreateSphereDto} from "./dto/create-sphere";
import {Sphere} from "./spheres.model";

@ApiTags('Сферы')
@Controller('spheres')
export class SpheresController {
    constructor(private sphereService: SpheresService) {}

    @ApiOperation({summary: 'Создание сферы'})
    @ApiResponse({status: 200, type: Sphere})
    @Post()
    create(@Body() dto: CreateSphereDto){
        return this.sphereService.createSphere(dto)
    }
}
