import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './commands/handlers';
import { Controllers } from './controllers';
import { Tenant, TenantSchema, User, UserSchema } from './models';
import { Services } from './services';
import { ClsModule } from 'nestjs-cls';
import { EventHandlers } from './events/handlers';
import { Sagas } from './sagas';
import { ValidationRules } from './validations';

@Module({
  imports: [
    ClsModule.forFeature(),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Tenant.name, schema: TenantSchema },
    ]),
  ],
  controllers: [
    ...Controllers,
  ],
  providers: [
    ...CommandHandlers,
    ...EventHandlers,
    ...Services,
    ...ValidationRules,
    ...Sagas,
  ],
  exports: [
  ],
})
export class TenantModule { }
