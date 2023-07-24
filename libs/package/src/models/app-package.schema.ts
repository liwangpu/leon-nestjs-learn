import { Entity } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({
  collection: 'app-package'
})
export class AppPackage extends Entity {

  @Prop()
  public name: string;

  @Prop()
  public tenantId: string;

  @Prop()
  public icon?: string;

}

export const AppPackageSchema = SchemaFactory.createForClass(AppPackage);

export type AppPackageDocument = HydratedDocument<AppPackage>;