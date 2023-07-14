import { IsEmail, IsNotEmpty } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export class CreateBookDto {

  @IsNotEmpty({
    message: '书籍名称为必填信息'
  })
  title: string;

  @IsEmail()
  email: string;
}

@Schema()
export class Book {

  @Prop()
  title: string;

  @Prop()
  email: string;

}

export const BookSchema = SchemaFactory.createForClass(Book);

export type BookDocument = HydratedDocument<Book>;