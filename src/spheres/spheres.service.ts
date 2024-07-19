import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Sphere} from "./spheres.model";
import {CreateSphereDto} from "./dto/create-sphere";

@Injectable()
export class SpheresService {
    constructor(@InjectModel(Sphere) private sphereRepository: typeof Sphere) {}

    async createSphere(dto: CreateSphereDto){
        const sphere = await this.sphereRepository.create(dto)
        return sphere
    }
}
