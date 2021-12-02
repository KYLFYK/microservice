import {Controller, Get, Inject} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {firstValueFrom} from "rxjs";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor( @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,) {}

  @Get()
  async getData() {
    const userResponse = await firstValueFrom(
        this.userServiceClient.send('user_hello', 1),
    );

    return  userResponse;
  }
}
