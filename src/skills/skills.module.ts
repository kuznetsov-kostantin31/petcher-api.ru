import { Module } from '@nestjs/common';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
import {DatabaseModule} from "../database/database.module";

@Module({
  controllers: [SkillsController],
  providers: [SkillsService],
  imports: [DatabaseModule]
})
export class SkillsModule {}
