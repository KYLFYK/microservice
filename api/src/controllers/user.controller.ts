import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  @Post('/')
  @ApiResponse({ type: UserDto, status: HttpStatus.OK })
  async createUser(@Body() userData: UserDto): Promise<UserDto> {
     const userResponse = await firstValueFrom(
       this.userServiceClient.send('user_create', userData),
     );
     return userResponse;
    return;
  }
}
