import { Entity } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Tenant extends Entity {

  @Prop()
  public name: string;

  @Prop()
  public legalPerson: string;

  @Prop()
  public email: string;

  @Prop()
  public address: string;

  @Prop()
  public type: string;

}

export const TenantSchema = SchemaFactory.createForClass(Tenant);

export type TenantDocument = HydratedDocument<Tenant>;