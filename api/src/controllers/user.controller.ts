import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserUpdateDto, UserDto, UsersListDto } from './dto/user.dto';

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
      this.userServiceClient.send('user:create', userData),
    );
    if (userResponse.statusCode !== HttpStatus.CREATED) {
      throw new HttpException(
        {
          statusCode: userResponse.statusCode,
          message: userResponse.message,
          errors: userResponse.errors,
        },
        userResponse.statusCode,
      );
    }
    return userResponse;
  }

  @Patch('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: UserUpdateDto,
  ): Promise<UserUpdateDto> {
    const sendData = {
      userId: id,
      data: userData,
    };
    const userResponse = await firstValueFrom(
      this.userServiceClient.send('user:update', sendData),
    );
    return userResponse;
  }

  @Get('/')
  async findAllUsers(): Promise<UsersListDto> {
    const usersResponse = await firstValueFrom(
      this.userServiceClient.send('user:list', true),
    );
    return usersResponse;
  }
}
