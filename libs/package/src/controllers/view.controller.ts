import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateAppPackageCommand, CreateViewCommand, DeleteAppPackageCommand } from '../commands/impl';
import { AppPackageDTO, CreateAppPackageDTO, CreateViewDTO, PackageQueryDTO, ViewDTO, ViewQueryDTO } from '../models';
import { AppPackageQuery, ViewQuery } from '../queries/impl';

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

  @Post()
  public async create(@Body() dto: CreateViewDTO): Promise<ViewDTO> {
    return this.commandBus.execute(CreateViewCommand.fromDTO(dto));
  }

  // @Delete(':id')
  // public async delete(@Param('id') id): Promise<AppPackageDTO> {
  //   return this.commandBus.execute(new DeleteAppPackageCommand(id));
  // }
}
