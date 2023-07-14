import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, CreateBookDto } from '../models';

@Injectable()
export class BookService {

  public constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

  public async create(dto: CreateBookDto) {
    const createdCat = new this.bookModel(dto);
    return createdCat.save();
  }

}
