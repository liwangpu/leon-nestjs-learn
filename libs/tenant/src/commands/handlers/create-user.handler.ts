import { UserService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl';
import { User } from '../../models';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

  public constructor(
    private readonly userSrv: UserService,
  ) { }

  public async execute(command: CreateUserCommand) {
    let user = new User();
    user.name = command.name;
    user.email = command.email;
    const res = await this.userSrv.create(user);
    return res;
  }
}