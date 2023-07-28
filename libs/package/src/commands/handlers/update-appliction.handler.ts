import { ApplicationService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateApplicationCommand, UpdateApplicationCommand } from '../impl';
import { ApplicationDTO } from '../../models';

@CommandHandler(UpdateApplicationCommand)
export class UpdateApplicationHandler implements ICommandHandler<UpdateApplicationCommand> {

  public constructor(
    private readonly appSrv: ApplicationService,
  ) { }

  public async execute(command: UpdateApplicationCommand): Promise<ApplicationDTO> {
    const updatedItem = await this.appSrv.update(command.toModel());
    return ApplicationDTO.fromModel(updatedItem);
  }
}