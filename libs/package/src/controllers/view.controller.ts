import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateViewCommand, DeleteViewCommand, UpdateViewCommand } from '../commands/impl';
import { AppPackageDTO, CreateViewDTO, ViewDTO, ViewQueryDTO } from '../models';
import { ViewIdQuery, ViewQuery } from '../queries/impl';

@Controller('view')
export class ViewController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }


  @Post('query')
  public async query(@Body() dto: ViewQueryDTO): Promise<Array<AppPackageDTO>> {
    return this.queryBus.execute(new ViewQuery(dto.applicationId));
  }

  @Get(':id')
  public async get(@Param('id') id): Promise<ViewDTO> {
    return this.queryBus.execute(new ViewIdQuery(id));
  }

  @Post()
  public async create(@Body() dto: CreateViewDTO): Promise<ViewDTO> {
    return this.commandBus.execute(CreateViewCommand.fromDTO(dto));
  }

  @Put(':id')
  public async update(@Param('id') id, @Body() dto: ViewDTO): Promise<ViewDTO> {
    dto.id = id;
    return this.commandBus.execute(UpdateViewCommand.fromDTO(dto));
  }

  @Delete(':id')
  public async delete(@Param('id') id): Promise<boolean> {
    return this.commandBus.execute(new DeleteViewCommand(id));
  }
}
