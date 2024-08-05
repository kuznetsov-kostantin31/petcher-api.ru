import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {AuthModule} from "../auth/auth.module";
import {PrismaService} from "../database/prisma.service";
import {DatabaseModule} from "../database/database.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      forwardRef(() => AuthModule),
      DatabaseModule
  ],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}
