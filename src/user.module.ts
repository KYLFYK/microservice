import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
  ],
  controllers: [UserController, RolesController],
  providers: [UserService, RolesService],
})
export class UserModule {}
