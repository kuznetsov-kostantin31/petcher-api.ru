import { Module } from '@nestjs/common';
import { PlatformsController } from './platforms.controller';
import { PlatformsService } from './platforms.service';
import {PrismaService} from "../database/prisma.service";
import {DatabaseModule} from "../database/database.module";

@Module({
  controllers: [PlatformsController],
  providers: [PlatformsService],
  imports: [DatabaseModule],
  exports: [PlatformsService]
})
export class PlatformsModule {}
