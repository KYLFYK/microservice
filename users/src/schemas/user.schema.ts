import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model, PaginateModel } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema({})
export class User extends Document {
  @Prop({ type: String, default: uuidv4 })
  _id: string;

  @Prop({ type: String, default: null, index: true, unique: true })
  email: string;

  @Prop({ type: String, default: null })
  password: string;

  @Prop({ type: Array, default: [] })
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserModel<T extends Document> = PaginateModel<T>;
export const UserModel: UserModel<User> = model<User>(
  'User',
  UserSchema,
) as UserModel<User>;
