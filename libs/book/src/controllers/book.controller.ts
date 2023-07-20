import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateBookDto } from '../models';
import { BookService } from '../services';
import { CustomCommandBus } from '../services/custom-command-bus';

@Controller('book')
export class BookController {

  public constructor(
    // private readonly commandBus: CustomCommandBus,
    // protected bookSrv: BookService,
  ) {
    // console.log(`book controller ctor`,);
  }

  @Post()
  public async create(@Body() dto: CreateBookDto): Promise<any> {

    // const m = await this.bookSrv.create(dto);
    console.log(`get book:`, dto);
    // console.log(`get book:`, dto);

    // return m;
  }
}

