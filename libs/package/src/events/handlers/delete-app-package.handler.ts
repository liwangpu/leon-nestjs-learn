import { ApplicationService } from '@app/package/services';
import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { AppPackageDeletedEvent } from '../impl';

@EventsHandler(AppPackageDeletedEvent)
export class DeleteAppPackageHandler implements IEventHandler<AppPackageDeletedEvent> {

  public constructor(
    private readonly appSrv: ApplicationService,
  ) { }

  public async handle(event: AppPackageDeletedEvent) {
    await this.appSrv.deleteByPackage(event.id);
  }
}