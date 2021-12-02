import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('user_hello')
  async getHello(): Promise<any> {
    return {message: 'Hello man!'}
  }
}
