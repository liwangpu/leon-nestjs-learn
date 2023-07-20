import { Entity } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User extends Entity {

  @Prop()
  public name: string;

  @Prop()
  public email: string;

  @Prop()
  public password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = HydratedDocument<User>;