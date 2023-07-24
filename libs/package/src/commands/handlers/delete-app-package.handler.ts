import { AppPackageService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteAppPackageCommand } from '../impl';

@CommandHandler(DeleteAppPackageCommand)
export class DeleteAppPackageHandler implements ICommandHandler<DeleteAppPackageCommand> {

  public constructor(
    private readonly appPackageSrv: AppPackageService,
  ) { }

  public async execute(command: DeleteAppPackageCommand): Promise<boolean> {
    return this.appPackageSrv.delete(command.id) as any;
  }
}