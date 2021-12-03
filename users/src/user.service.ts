import { Injectable, Logger } from '@nestjs/common';
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

  async createUser(createUser: User.IUser) {
    const user = new this.userModel(createUser);
    const userJSON = user.toJSON();
    const userObject = user.toObject();
    return userJSON
  }
}
