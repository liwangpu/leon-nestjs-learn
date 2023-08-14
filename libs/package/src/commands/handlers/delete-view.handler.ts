import { ViewService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteViewCommand } from '../impl';
import { NotFoundException } from '@nestjs/common';

@CommandHandler(DeleteViewCommand)
export class DeleteViewHandler implements ICommandHandler<DeleteViewCommand> {

  public constructor(
    private readonly viewSrv: ViewService,
  ) { }

  public async execute(command: DeleteViewCommand): Promise<boolean> {
    if (!this.viewSrv.checkViewExists({ id: command.id })) {
      throw new NotFoundException(`记录 #${command.id} 没有找到!`);
    }

    await this.viewSrv.delete(command.id);
    return true;
  }
}