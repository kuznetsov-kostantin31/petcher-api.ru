import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {PrismaService} from "../database/prisma.service";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}
    async createUser(dto: CreateUserDto){
        return this.prisma.user.create({data: dto})
    }

    async getAllUsers(){
        return this.prisma.user.findMany();
    }

    async getUserByEmail(email: string){
        return this.prisma.user.findFirst({where: {email}})
    }
}
