import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from './providers/jwt.servises';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './providers/mongo.service';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
    }),
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: 'UserSchema', // TODO: Сделать объектом
      },
      {
        name: 'Roles',
        schema: 'RolesSchema', // TODO: Сделать объектом
      },
    ]),
  ],
  controllers: [UserController, RolesController],
  providers: [ConfigService, UserService, RolesService],
})
export class UserModule {}
