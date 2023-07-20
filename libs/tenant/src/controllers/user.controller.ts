import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/impl';
import { CreateUserDTO } from '../models';

@Controller('user')
export class UserController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }

  @Post()
  public async create(@Body() dto: CreateUserDTO): Promise<any> {
    return this.commandBus.execute(new CreateUserCommand(dto.name, dto.email));
  }

}
