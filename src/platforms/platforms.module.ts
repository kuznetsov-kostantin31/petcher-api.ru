import { Module } from '@nestjs/common';
import { PlatformsController } from './platforms.controller';
import { PlatformsService } from './platforms.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Platform} from "./platforms.model";

@Module({
  controllers: [PlatformsController],
  providers: [PlatformsService],
  imports: [
      SequelizeModule.forFeature([Platform])
  ],
  exports: [PlatformsService]
})
export class PlatformsModule {}
