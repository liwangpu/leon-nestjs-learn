import { TenantService, UserService } from '../../services';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTenantCommand, CreateUserCommand } from '../impl';
import { Tenant } from '@app/tenant/models';

@CommandHandler(CreateTenantCommand)
export class CreateTenantHandler implements ICommandHandler<CreateTenantCommand> {

  public constructor(
    private readonly tenantSrv: TenantService,
  ) { }

  public async execute(command: CreateTenantCommand) {
    // console.log(`create user handler get command:`, command);
    // const user = await this.userSrv.create(command);
    // console.log(`user:`, user);
    // return user;

    const tenant = new Tenant();
    tenant.name = command.name;
    tenant.email = command.email;
    tenant.address = command.address;
    const createdTenant = await this.tenantSrv.create(tenant);
    // console.log(`create tenant:`, command);

    return createdTenant;
  }
}