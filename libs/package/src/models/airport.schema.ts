import { Entity } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema({
  collection: "airport",
})
export class Airport extends Entity {
  @Prop()
  public name: string;

  @Prop()
  public tenantId: string;

  @Prop()
  public subscription: string;
}

export const AirportSchema = SchemaFactory.createForClass(Airport);

export type AirportDocument = HydratedDocument<Airport>;
