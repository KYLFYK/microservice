import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer.controller';
import { UserController } from './controllers/user.controller';


@Module({
  imports: [],
  controllers: [CustomerController, UserController],
  providers: [],
})
export class AppModule {}
