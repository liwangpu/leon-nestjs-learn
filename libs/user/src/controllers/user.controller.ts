import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/impl';
import { IUserProfile } from '../interfaces';

@Controller('user')
export class UserController {

  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }

  @Post()
  public async create(@Body() command: CreateUserCommand): Promise<IUserProfile> {
    return this.commandBus.execute(new CreateUserCommand(command.name, command.email));
  }

}
