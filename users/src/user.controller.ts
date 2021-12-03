import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('user:create')
  async createUser(
    userData: User.IUserCreateData,
  ): Promise<User.IResponseData> {
    return await this.userService.createUser(userData);
  }
}
