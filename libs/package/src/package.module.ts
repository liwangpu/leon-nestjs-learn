import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClsModule } from 'nestjs-cls';
import { CommandHandlers } from './commands/handlers';
import { Controllers } from './controllers';
import { EventHandlers } from './events/handlers';
import { Application, ApplicationSchema, AppPackage, AppPackageSchema } from './models';
import { QueryHandlers } from './queries/handlers';
import { Services } from './services';
import { Validations } from './validations';

@Module({
  controllers: [
    ...Controllers,
  ],
  providers: [
    ...Services,
    ...CommandHandlers,
    ...QueryHandlers,
    ...EventHandlers,
    ...Validations,
  ],
  imports: [
    ClsModule.forFeature(),
    MongooseModule.forFeature([
      { name: AppPackage.name, schema: AppPackageSchema },
      { name: Application.name, schema: ApplicationSchema },
    ]),
  ],
})
export class PackageModule { }
