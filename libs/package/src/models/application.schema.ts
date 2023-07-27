import { Entity } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Application extends Entity {

  @Prop()
  public name: string;
  @Prop()
  public tenantId: string;
  @Prop()
  public packageId: string;
  @Prop()
  public icon?: string;

}

export const ApplicationSchema = SchemaFactory.createForClass(Application);

export type ApplicationDocument = HydratedDocument<Application>;