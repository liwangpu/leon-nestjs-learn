import { TenantType } from '@app/common';
import { CreateTenantDTO, Tenant } from '../../models';

export class CreateTenantCommand {

  public constructor(
    public readonly name: string,
    public readonly legalPerson: string,
    public readonly email: string,
    public readonly address?: string,
    public readonly type?: TenantType,
  ) { }

  public static fromDTO(dto: CreateTenantDTO): CreateTenantCommand {
    return new CreateTenantCommand(dto.name, dto.legalPerson, dto.email, dto.address);
  }

  public toModel(): Tenant {
    const model = new Tenant();
    model.name = this.name;
    model.legalPerson = this.legalPerson;
    model.email = this.email;
    model.address = this.address;
    model.type = this.type;
    return model;
  }
}