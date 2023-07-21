import { AggregateRoot } from '@nestjs/cqrs';
import { Prop } from '@nestjs/mongoose';

export class Entity extends AggregateRoot {
  public id?: string;
  @Prop()
  public createdBy: string;
  @Prop()
  public lastModifiedBy: string;
  @Prop()
  public tenantId: string;
}