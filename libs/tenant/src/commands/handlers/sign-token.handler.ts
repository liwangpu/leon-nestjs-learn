import { AuthService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SignTokenCommand } from '../impl';

@CommandHandler(SignTokenCommand)
export class SignTokenHandler implements ICommandHandler<SignTokenCommand> {

  public constructor(
    private readonly authSrv: AuthService,
  ) { }

  public async execute(command: SignTokenCommand) {
    const res = await this.authSrv.signIn(command.userId);
    return res;
  }
}