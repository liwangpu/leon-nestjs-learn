import { UserService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

  public constructor(
    private readonly userSrv: UserService,
  ) { }

  public async execute(command: CreateUserCommand) {
    const user = await this.userSrv.create(command.toModel());
    return user;
  }
}