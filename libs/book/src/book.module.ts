import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookController } from './controllers/book.controller';
import { Book, BookSchema } from './models';
import { BookService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [BookService],
  exports: [],
  controllers: [BookController],
})
export class BookModule { }
