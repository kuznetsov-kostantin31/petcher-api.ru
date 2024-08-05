import { Injectable } from '@nestjs/common';
import {PrismaService} from "../database/prisma.service";
import {CreateResponseDto} from "./dto/create-response";
import {UpdateResponseDto} from "./dto/update-response";

@Injectable()
export class ResponsesService {
    constructor(private prisma: PrismaService) {}

    async create(dto: CreateResponseDto){
        return this.prisma.response.create({data: dto})
    }

    async update(id: number, dto: UpdateResponseDto){
        return this.prisma.response.update({where: {id}, data: dto})
    }

    async getAll(){
        return this.prisma.response.findMany()
    }
}
