import { IsEmail, IsNotEmpty } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export class CreateUserDTO {

  @IsNotEmpty({
    message: '姓名为必填信息'
  })
  public name: string;

  @IsEmail()
  public email: string;
}

@Schema()
export class User {

  @Prop()
  name: string;

  @Prop()
  email: string;

}

export const UserSchema = SchemaFactory.createForClass(User);

export type UserDocument = HydratedDocument<User>;