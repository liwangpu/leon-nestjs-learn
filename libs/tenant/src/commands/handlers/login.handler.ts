import { AuthService, UserService } from '../../services';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand, LoginCommand } from '../impl';

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {

  public constructor(
    private readonly authSrv: AuthService,
  ) { }

  public async execute(command: LoginCommand) {
    const res = await this.authSrv.signIn(command.username, command.password);
    return res;
  }
}