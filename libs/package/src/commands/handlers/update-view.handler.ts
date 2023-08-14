import { ViewService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateViewCommand } from '../impl';
import { ViewDTO } from '../../models';
import { NotFoundException } from '@nestjs/common';

@CommandHandler(UpdateViewCommand)
export class UpdateViewHandler implements ICommandHandler<UpdateViewCommand> {

  public constructor(
    private readonly viewSrv: ViewService,
  ) { }

  public async execute(command: UpdateViewCommand): Promise<ViewDTO> {
    if (!this.viewSrv.checkViewExists({ id: command.id })) {
      throw new NotFoundException(`记录 #${command.id} 没有找到!`);
    }

    await this.viewSrv.update(command.toModel());
    const model = await this.viewSrv.getById(command.id);
    return ViewDTO.fromModel(model);
  }
}