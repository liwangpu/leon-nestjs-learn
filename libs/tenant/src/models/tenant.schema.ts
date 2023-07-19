import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Tenant {

  @Prop()
  public name: string;

  @Prop()
  public email: string;

  @Prop()
  public address: string;

}

export const TenantSchema = SchemaFactory.createForClass(Tenant);

export type TenantDocument = HydratedDocument<Tenant>;