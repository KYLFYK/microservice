import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('user.hello')
  async getHello(): Promise<User.IUser> {
    return { email: 'test@test.com', password: 'password', type: 'Admin' };
  }
}
