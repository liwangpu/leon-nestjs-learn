import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateAppPackageCommand, DeleteAppPackageCommand } from '../commands/impl';
import { AppPackageDTO, CreateAppPackageDTO, PackageQueryDTO } from '../models';
import { AppPackageQuery } from '../queries/impl';

@Controller('appPackage')
export class AppPackageController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }


  @Post('query')
  public async query(@Body() dto: PackageQueryDTO): Promise<Array<AppPackageDTO>> {
    return this.queryBus.execute(new AppPackageQuery());
  }

  @Post()
  public async create(@Body() dto: CreateAppPackageDTO): Promise<AppPackageDTO> {
    return this.commandBus.execute(CreateAppPackageCommand.fromDTO(dto));
  }

  @Delete(':id')
  public async delete(@Param('id') id): Promise<AppPackageDTO> {
    return this.commandBus.execute(new DeleteAppPackageCommand(id));
  }
}
