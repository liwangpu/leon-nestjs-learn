import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateApplicationCommand } from '../commands/impl';
import { ApplicationDTO, ApplicationQueryDTO, CreateApplicationDTO } from '../models';
import { ApplicationQuery } from '../queries/impl';

@Controller('application')
export class ApplicationController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }


  @Post('query')
  public async query(@Body() dto: ApplicationQueryDTO): Promise<Array<ApplicationDTO>> {
    return this.queryBus.execute(new ApplicationQuery(dto.packageId));
  }

  @Post()
  public async create(@Body() dto: CreateApplicationDTO): Promise<ApplicationDTO> {
    return this.commandBus.execute(CreateApplicationCommand.fromDTO(dto));
  }

  // @Delete(':id')
  // public async delete(@Param('id') id): Promise<boolean> {
  //   return this.commandBus.execute(new DeleteAppPackageCommand(id));
  // }

}
