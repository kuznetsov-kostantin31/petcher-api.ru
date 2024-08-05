import { Module } from '@nestjs/common';
import {ResponsesController} from "./responses.controller";
import {ResponsesService} from "./responses.service";
import {DatabaseModule} from "../database/database.module";

@Module({
    controllers: [ResponsesController],
    providers: [ResponsesService],
    imports: [DatabaseModule]
})
export class ResponsesModule {}
