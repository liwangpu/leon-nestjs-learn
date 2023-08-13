import { ViewService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateViewCommand } from '../impl';
import { ViewDTO } from '../../models';

@CommandHandler(CreateViewCommand)
export class CreateViewHandler implements ICommandHandler<CreateViewCommand> {

  public constructor(
    private readonly viewSrv: ViewService,
  ) { }

  public async execute(command: CreateViewCommand): Promise<ViewDTO> {
    const createdItem = await this.viewSrv.create(command.toModel());
    return ViewDTO.fromModel(createdItem);
  }
}