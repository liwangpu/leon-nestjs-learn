import { UserService } from '../../services';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl';
// import * as clc from 'cli-color';
// import { HeroRepository } from '../../repository/hero.repository';
// import { KillDragonCommand } from '../impl/kill-dragon.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

  public constructor(
    // private readonly repository: HeroRepository,
    // private readonly publisher: EventPublisher,
    private readonly userSrv: UserService,
  ) { }

  public async execute(command: CreateUserCommand) {
    console.log(`create user handler get command:`, command);
    const user = await this.userSrv.create(command);
    console.log(`user:`, user);
  }
}