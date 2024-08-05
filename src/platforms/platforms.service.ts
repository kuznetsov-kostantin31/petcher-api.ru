import {Injectable} from '@nestjs/common';
import {CreatePlatformDto} from "./dto/create-platform";
import {PrismaService} from "../database/prisma.service";

@Injectable()
export class PlatformsService {
    constructor(private prisma: PrismaService) {}

    async createPlatform(dto: CreatePlatformDto){
        return this.prisma.platform.create({data: dto});
    }
    async getAllPlatforms(){
        return this.prisma.platform.findMany();
    }
}
