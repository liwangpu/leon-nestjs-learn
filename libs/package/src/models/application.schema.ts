import { Entity } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';

export interface IApplicationField {
  id: string;
  type: string;
  title: string;
  [key: string]: any;
}

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
  @Prop()
  public definition?: string;
  @Prop({ type: SchemaTypes.Array })
  public fields?: Array<IApplicationField>;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);

export type ApplicationDocument = HydratedDocument<Application>;