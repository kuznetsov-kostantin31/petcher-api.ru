import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {FavoriteEntity} from "./favorite.entity";

@ApiTags('Избранное')
@Controller('favorites')
export class FavoritesController {
  constructor(private favoritesService: FavoritesService) {}

  @ApiOperation({summary: 'Создание избранного'})
  @ApiResponse({status: 200, type: FavoriteEntity})
  @Post()
  create(@Body() dto: CreateFavoriteDto) {
    return this.favoritesService.create(dto);
  }

  @ApiOperation({summary: 'Получение всех избранных'})
  @ApiResponse({status: 200, type: [FavoriteEntity]})
  @Get()
  findAll() {
    return this.favoritesService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoriteDto: UpdateFavoriteDto) {
    return this.favoritesService.update(+id, updateFavoriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoritesService.remove(+id);
  }
}
