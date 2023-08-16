import { Entity } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class View extends Entity {

  @Prop()
  public name: string;
  @Prop()
  public tenantId: string;
  @Prop()
  public applicationId: string;
  @Prop()
  public icon?: string;
  @Prop()
  public definition?: string;
}

export const ViewSchema = SchemaFactory.createForClass(View);

export type ViewDocument = HydratedDocument<View>;