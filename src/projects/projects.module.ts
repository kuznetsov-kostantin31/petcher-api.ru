import { Module } from '@nestjs/common';
import {ProjectsService} from "./projects.service";
import {ProjectsController} from "./projects.controller";
import {DatabaseModule} from "../database/database.module";

@Module({
    providers: [ProjectsService],
    controllers: [ProjectsController],
    imports: [DatabaseModule]
})
export class ProjectsModule {}
