import { Injectable } from '@nestjs/common';
import {PrismaService} from "../database/prisma.service";

@Injectable()
export class SkillsService {
    constructor(private prisma: PrismaService) {}

    async getAllSkills(){
        return this.prisma.skill.findMany()
    }

    async getAllSkillsByRoleId(roleId: number){
        return this.prisma.skill.findMany({where: {roleId}})
    }
}
