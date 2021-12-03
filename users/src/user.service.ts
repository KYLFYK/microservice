import {
  BadRequestException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
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

  /**
   * Creating User
   * @param {User.IUserCreateData} createUser
   */
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

  /**
   * Update User Data
   * @param {String} id
   */
  async updateUser(id: string, updateData: User.IUserUpdateData) {
    const user = await this.userModel
      .findOneAndUpdate({ _id: id }, updateData)
      .exec();
    if (!user) {
      throw new NotFoundException('Указанный пользователь не найден');
    }
    return user;
  }

  async findAllUsers(): Promise<User.IUserResponseData[]> {
    return await this.userModel.find().exec();
  }
}
