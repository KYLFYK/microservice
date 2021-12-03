import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('user_create')
  async createUser(userData: User.IUser): Promise<User.IUser> {

    return await this.userService.createUser(userData);
  }
}
