import { Controller, Get, Param } from '@nestjs/common';
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

  @MessagePattern('user:update')
  async updateUser(updateData: User.ISendUpdatedData) {
    return await this.userService.updateUser(
      updateData.userId,
      updateData.data,
    );
  }

  @MessagePattern('user:list')
  async findAllUsers(): Promise<User.IUserResponseData[]> {
    return await this.userService.findAllUsers();
  }
}
