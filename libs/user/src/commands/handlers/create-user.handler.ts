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
  ) { }

  public async execute(command: CreateUserCommand) {
    console.log(`create user handler get command:`, command);
    // console.log(clc.greenBright('KillDragonCommand...'));

    // const { heroId, dragonId } = command;
    // const hero = this.publisher.mergeObjectContext(
    //   await this.repository.findOneById(+heroId),
    // );
    // hero.killEnemy(dragonId);
    // hero.commit();
  }
}