import { Controller, Get, HttpStatus, Inject } from '@nestjs/common';
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

  @Get()
  @ApiResponse({ type: UserDto, status: HttpStatus.OK })
  async getData(): Promise<UserDto> {
    const userResponse = await firstValueFrom(
      this.userServiceClient.send('user.hello', { name: 'Ruslana' }),
    );

    return userResponse;
  }
}
