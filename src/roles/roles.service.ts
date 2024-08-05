import {Injectable} from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {PrismaService} from "../database/prisma.service";

@Injectable()
export class RolesService {

    constructor(private prisma: PrismaService) {}

    async createRole(dto: CreateRoleDto){
        return this.prisma.role.create({data: dto})
    }
    async getRoleByValue(name: string){
        return this.prisma.role.findFirst({where: {name}})
    }
    async getAllRoles(){
        return this.prisma.role.findMany();
    }
}
