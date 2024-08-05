import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {PrismaService} from "../database/prisma.service";
import {DatabaseModule} from "../database/database.module";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [DatabaseModule],
  exports: [
      RolesService
  ]
})
export class RolesModule {}
