import { AuthService, UserService } from '../../services';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand, LoginCommand } from '../impl';

@CommandHandler(LoginCommand)
export class LoginHandler implements ICommandHandler<LoginCommand> {

  public constructor(
    // private readonly repository: HeroRepository,
    // private readonly publisher: EventPublisher,
    private readonly authSrv: AuthService,
  ) { }

  public async execute(command: LoginCommand) {
    console.log(`create user handler get command:`, command);
    // const user = await this.userSrv.create(command);

    const res = await this.authSrv.signIn(command.username, command.password);
    // console.log(`user:`, user);

    return res;
  }
}