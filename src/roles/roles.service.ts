import { Injectable } from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-role.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {SpheresService} from "../spheres/spheres.service";

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role,
                private sphereRepository: SpheresService) {}

    async createRole(dto: CreateRoleDto){
        const role = await this.roleRepository.create(dto)
        const sphere = await this.sphereRepository.getSphereByValue('Веб-разработка')
        await role.$set('sphereId', [sphere.id])
        sphere.roles = [role]
        return role
    }
    async getRoleByValue(value: string){
        const role = await this.roleRepository.findOne({where:{value}})
        return role
    }
    async getAllRoles(){
        const roles = await this.roleRepository.findAll({include: {all: true}});
        return roles;
    }
}
