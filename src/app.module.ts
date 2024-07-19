import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { SpheresModule } from './spheres/spheres.module';
import {Sphere} from "./spheres/spheres.model";
import { PlatformsModule } from './platforms/platforms.module';
import { ResponsesService } from './responses/responses.service';
import { ResponsesController } from './responses/responses.controller';
import { ResponsesModule } from './responses/responses.module';
import { SkillsModule } from './skills/skills.module';
import { ProjectsService } from './projects/projects.service';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsModule } from './projects/projects.module';


// @ts-ignore
@Module({
    controllers: [ResponsesController, ProjectsController],
    providers: [ResponsesService, ProjectsService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Sphere],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        SpheresModule,
        PlatformsModule,
        ResponsesModule,
        SkillsModule,
        ProjectsModule,
    ]
})
export class AppModule{}