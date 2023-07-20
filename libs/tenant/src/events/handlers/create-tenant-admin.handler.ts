// import { EventBus, IEventHandler } from '@nestjs/cqrs';
// import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
// import { TenantCreatedEvent } from '../impl';

// @EventsHandler(TenantCreatedEvent)
// export class CreateTenantAdminHandler implements IEventHandler<TenantCreatedEvent> {

//   public constructor(
//     private readonly eventBus: EventBus,
//   ) {
//     // console.log(`create tenant handler ctor!`);
//   }

//   public async handle(event: TenantCreatedEvent) {
//     console.log(`create tenant admin event handler :`, event);
//   }
// }