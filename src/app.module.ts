import {Module} from "@nestjs/common";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { PlatformsModule } from './platforms/platforms.module';
import { ResponsesModule } from './responses/responses.module';
import { SkillsModule } from './skills/skills.module';
import { ProjectsModule } from './projects/projects.module';
import { DatabaseModule } from './database/database.module';
import { FavoritesModule } from './favorites/favorites.module';


// @ts-ignore
@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PlatformsModule,
        ResponsesModule,
        SkillsModule,
        ProjectsModule,
        DatabaseModule,
        FavoritesModule,
    ]
})
export class AppModule{}