import { AppPackageService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAppPackageCommand } from '../impl';
import { AppPackageDTO } from '../../models';

@CommandHandler(CreateAppPackageCommand)
export class CreateAppPackageHandler implements ICommandHandler<CreateAppPackageCommand> {

  public constructor(
    private readonly appPackageSrv: AppPackageService,
  ) { }

  public async execute(command: CreateAppPackageCommand): Promise<AppPackageDTO> {
    const createdItem = await this.appPackageSrv.create(command.toModel());
    return AppPackageDTO.fromModel(createdItem);
  }
}