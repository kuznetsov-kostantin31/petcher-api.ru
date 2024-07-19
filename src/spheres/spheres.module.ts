import { Module } from '@nestjs/common';
import { SpheresController } from './spheres.controller';
import { SpheresService } from './spheres.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Sphere} from "./spheres.model";

@Module({
  controllers: [SpheresController],
  providers: [SpheresService],
  imports: [
      SequelizeModule.forFeature([Sphere])
  ],
  exports: [SpheresService]
})
export class SpheresModule {}
