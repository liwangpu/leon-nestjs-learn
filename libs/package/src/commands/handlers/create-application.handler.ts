import { ApplicationService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateApplicationCommand } from '../impl';
import { ApplicationDTO } from '../../models';

@CommandHandler(CreateApplicationCommand)
export class CreateApplicationHandler implements ICommandHandler<CreateApplicationCommand> {

  public constructor(
    private readonly appSrv: ApplicationService,
  ) { }

  public async execute(command: CreateApplicationCommand): Promise<ApplicationDTO> {
    const createdItem = await this.appSrv.create(command.toModel());
    return ApplicationDTO.fromModel(createdItem);
  }
}