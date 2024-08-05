import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import {PrismaService} from "../database/prisma.service";

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {
  }

  create(dto: CreateFavoriteDto) {
    return this.prisma.favorites.create({data: dto})
  }

  getAll() {
    return this.prisma.favorites.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} favorite`;
  }

  update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    return `This action updates a #${id} favorite`;
  }

  remove(id: number) {
    return `This action removes a #${id} favorite`;
  }
}
