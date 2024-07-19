import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Platform} from "./platforms.model";
import {CreatePlatformDto} from "./dto/create-platform";

@Injectable()
export class PlatformsService {
    constructor(@InjectModel(Platform) private platformRepository: typeof Platform) {}

    async createPlatform(dto: CreatePlatformDto){
        const platform = await this.platformRepository.create(dto)
        return platform;
    }
    async getAllPlatforms(){
        const platforms = await this.platformRepository.findAll({include: {all: true}});
        return platforms;
    }
}
