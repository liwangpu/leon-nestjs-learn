import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { NotFoundError } from 'rxjs';
import { CreateApplicationCommand, UpdateApplicationCommand } from '../commands/impl';
import { ApplicationDTO, ApplicationQueryDTO, CreateApplicationDTO } from '../models';
import { ApplicationModelQuery, ApplicationQuery } from '../queries/impl';
import { ApplicationService } from '../services';

@Controller('application')
export class ApplicationController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly appSrv: ApplicationService,
  ) { }

  @Get(':id')
  public async get(@Param('id') id): Promise<ApplicationDTO> {
    const model = await this.appSrv.getById(id);
    if (!model) {
      throw new NotFoundException(`没有找到id为${id}的应用!`);
    }

    return ApplicationDTO.fromModel(model);
  }

  @Post('query')
  public async query(@Body() dto: ApplicationQueryDTO): Promise<Array<ApplicationDTO>> {
    return this.queryBus.execute(new ApplicationQuery(dto.packageId));
  }

  @Post()
  public async create(@Body() dto: CreateApplicationDTO): Promise<ApplicationDTO> {
    return this.commandBus.execute(CreateApplicationCommand.fromDTO(dto));
  }

  @Put(':id')
  public async update(@Param('id') id, @Body() dto: ApplicationDTO): Promise<ApplicationDTO> {
    dto.id = id;
    return this.commandBus.execute(UpdateApplicationCommand.fromDTO(dto));
  }

  @Get('model/:id')
  public async getModel(@Param('id') id): Promise<any> {
    const model = await this.appSrv.getById(id);
    if (!model) {
      throw new NotFoundException(`没有找到id为${id}的应用!`);
    }

    return this.queryBus.execute(new ApplicationModelQuery(id));
  }

  // @Delete(':id')
  // public async delete(@Param('id') id): Promise<boolean> {
  //   return this.commandBus.execute(new DeleteAppPackageCommand(id));
  // }

}
