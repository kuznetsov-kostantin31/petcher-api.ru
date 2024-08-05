import { Injectable } from '@nestjs/common';
import {PrismaService} from "../database/prisma.service";
import {CreateProjectDto} from "./dto/create-project";

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) {}

    async create(dto: CreateProjectDto){
        return this.prisma.project.create({data: dto})
    }

    async getAll(){
        return this.prisma.project.findMany()
    }
}
