import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateTenantCommand } from '../commands/impl';
import { CreateTenantDTO } from '../models';

@Controller('tenant')
export class TenantController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }

  @Post()
  public async create(@Body() dto: CreateTenantDTO): Promise<any> {
    return this.commandBus.execute(new CreateTenantCommand(dto.name, dto.email, dto.address));
  }

}
