import { Body, Controller, Post } from '@nestjs/common';
import { CreateBookDto } from '../models';
import { BookService } from '../services';

@Controller('book')
export class BookController {

  public constructor(protected bookSrv: BookService) { }
  @Post()
  public async create(@Body() dto: CreateBookDto): Promise<any> {

    const m = await this.bookSrv.create(dto);
    console.log(`get book:`, dto);
    // console.log(`get book:`, dto);

    return m;
  }
}
