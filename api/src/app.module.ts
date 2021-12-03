import {Module} from '@nestjs/common';
import {CustomerController} from "./controllers/customer.controller";
import { UserController } from './controllers/user.controller';
import {ClientProxyFactory} from "@nestjs/microservices";
import {ConfigService} from "./services/config.service";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,

    }),
  ],
  controllers: [CustomerController,UserController],
  providers: [
      ConfigService,
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        const userServiceOptions = configService.get('userService');
        return ClientProxyFactory.create(userServiceOptions);
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
