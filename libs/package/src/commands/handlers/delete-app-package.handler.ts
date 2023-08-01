import { AppPackageService } from '../../services';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { DeleteAppPackageCommand } from '../impl';
import { AppPackageDeletedEvent } from '../../events/impl';

@CommandHandler(DeleteAppPackageCommand)
export class DeleteAppPackageHandler implements ICommandHandler<DeleteAppPackageCommand> {

  public constructor(
    private readonly appPackageSrv: AppPackageService,
    private readonly eventBus: EventBus,
  ) { }

  public async execute(command: DeleteAppPackageCommand): Promise<boolean> {
    const res = await this.appPackageSrv.delete(command.id) as any;
    this.eventBus.publish(new AppPackageDeletedEvent(command.id));
    return res;
  }
}