import { Req, Scope } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTenantCommand } from '../commands/impl';
import { CreateTenantDTO } from '../models';

@Controller('tenant')
export class TenantController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {
    // console.log(`tenant controller ctor!`,);
  }

  @Post()
  public async create(@Body() dto: CreateTenantDTO, @Req() req: Request): Promise<any> {
    // console.log(`req:`,req);
    return this.commandBus.execute(CreateTenantCommand.fromDTO(dto));
  }

}
