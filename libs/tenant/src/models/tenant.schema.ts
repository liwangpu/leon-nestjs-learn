import { Entity, TenantType } from '@app/common';
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
  public phone: string;

  @Prop()
  public address: string;

  @Prop({ type: 'string' })
  public type: TenantType;

}

export const TenantSchema = SchemaFactory.createForClass(Tenant);

export type TenantDocument = HydratedDocument<Tenant>;