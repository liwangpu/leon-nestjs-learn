import { ApplicationService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateApplicationCommand } from '../impl';
import { ApplicationDTO } from '../../models';

@CommandHandler(UpdateApplicationCommand)
export class UpdateApplicationHandler implements ICommandHandler<UpdateApplicationCommand> {

  public constructor(
    private readonly appSrv: ApplicationService,
  ) { }

  public async execute(command: UpdateApplicationCommand): Promise<ApplicationDTO> {
    await this.appSrv.update(command.toModel());
    const model = await this.appSrv.getById(command.id);
    return ApplicationDTO.fromModel(model);
  }
}