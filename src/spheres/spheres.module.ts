import {forwardRef, Module} from '@nestjs/common';
import { SpheresController } from './spheres.controller';
import { SpheresService } from './spheres.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Sphere} from "./spheres.model";
import {Role} from "../roles/roles.model";
import {RolesModule} from "../roles/roles.module";

@Module({
  controllers: [SpheresController],
  providers: [SpheresService],
  imports: [
      SequelizeModule.forFeature([Sphere, Role]),
      forwardRef(()=> RolesModule)
  ],
  exports: [SpheresService]
})
export class SpheresModule {}
