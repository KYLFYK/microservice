import {
  BadRequestException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import { User, UserModel } from './schemas/user.schema';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  private userModel: UserModel<User>;
  private logger = new Logger(UserService.name);

  constructor(
    @InjectConnection() private connection: Connection,
    private jwtService: JwtService,
  ) {
    this.userModel = this.connection.model('User') as UserModel<User>;
  }

  async createUser(
    createUser: User.IUserCreateData,
  ): Promise<User.IResponseData> {
    let result;

    const user = new this.userModel(createUser);
    const userJSON = user.toJSON();
    const userObject = user.toObject();
    try {
      await user.save();
      result = {
        statusCode: HttpStatus.OK,
        message: 'Пользователь был создан',
      };
    } catch (e) {
      result = {
        statusCode: HttpStatus.CONFLICT,
        message: 'Пользователь с таким email уже существует',
        errors: 'Conflict',
      };
    }
    return result;
  }
}
