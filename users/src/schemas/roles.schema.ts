import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model, PaginateModel } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class Roles extends Document {
  @Prop({ type: String, default: uuidv4 })
  _id: string;
}
export const RolesSchema = SchemaFactory.createForClass(Roles);
