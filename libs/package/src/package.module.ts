import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ClsModule } from "nestjs-cls";
import { CommandHandlers } from "./commands/handlers";
import { Controllers } from "./controllers";
import { SchemaDefinitions } from "./models";
import { QueryHandlers } from "./queries/handlers";
import { Services } from "./services";
import { Validations } from "./validations";

@Module({
  controllers: [...Controllers],
  providers: [
    ...Services,
    ...CommandHandlers,
    ...QueryHandlers,
    ...Validations,
  ],
  imports: [
    ClsModule.forFeature(),
    MongooseModule.forFeature(SchemaDefinitions),
  ],
})
export class PackageModule {}
