import { TenantService } from '../../services';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateTenantCommand } from '../impl';
import { TenantCreatedEvent } from '../../events/impl';

@CommandHandler(CreateTenantCommand)
export class CreateTenantHandler implements ICommandHandler<CreateTenantCommand> {

  public constructor(
    private readonly tenantSrv: TenantService,
    private readonly eventBus: EventBus,
  ) {
    // console.log(`create tenant handler ctor!`);
  }

  public async execute(command: CreateTenantCommand) {
    const tenant = await this.tenantSrv.create(command.toModel());
    // // console.log(`create tenant:`, command);
    
    this.eventBus.publish(new TenantCreatedEvent(tenant.id, tenant.type, tenant.email, tenant.phone, tenant.legalPerson));
    return tenant;
  }
}