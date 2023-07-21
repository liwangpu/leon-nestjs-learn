import { Entity, UserType } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User extends Entity {
  @Prop()
  public name: string;
  @Prop()
  public username: string;
  @Prop()
  public email: string;
  @Prop()
  public phone: string;
  @Prop()
  public password: string;
  @Prop({ type: 'string' })
  public type: UserType;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = HydratedDocument<User>;