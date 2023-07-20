import { Inject, Scope } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, CreateBookDto } from '../models';

@Injectable()
export class BookService {

  public constructor(
    @InjectModel(Book.name) private bookModel: Model<Book>,
    @Inject(REQUEST) private readonly request: Request,
  ) {
    console.log(`book service ctor`,);
  }

  public async create(dto: CreateBookDto) {
    // const createdCat = new this.bookModel(dto);
    // return createdCat.save();
    console.log(`u:`, this.request['user']);
    return null;
  }

}
