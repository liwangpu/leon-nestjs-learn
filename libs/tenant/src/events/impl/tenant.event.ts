import { TenantType } from '@app/common';

export class TenantCreatedEvent {

  public constructor(
    public readonly id: string,
    public readonly type: TenantType,
    public readonly email: string,
    public readonly phone: string,
    public readonly legalPerson: string,
  ) { }
}