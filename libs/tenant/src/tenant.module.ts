import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './commands/handlers';
import { Controllers } from './controllers';
import { Tenant, TenantSchema, User, UserSchema } from './models';
import { Services } from './services';
import { ClsModule } from 'nestjs-cls';
import { EventHandlers } from './events/handlers';
import { Sagas } from './sagas';
import { ValidationRules } from './validations';
import { QueryHandlers } from './queries/handlers';
import { JwtModule } from '@nestjs/jwt';
import { TMP_JWT_SECRET } from '@app/common/consts';
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [
    ClsModule.forFeature(),
    WinstonModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Tenant.name, schema: TenantSchema },
    ]),
    JwtModule.register({
      global: true,
      secret: TMP_JWT_SECRET,
      // publicKey: 'petrel',
      signOptions: { expiresIn: `2 days` },
      // signOptions: { expiresIn: `5s` },
    }),
  ],
  controllers: [
    ...Controllers,
  ],
  providers: [
    ...CommandHandlers,
    ...QueryHandlers,
    ...EventHandlers,
    ...Services,
    ...ValidationRules,
    ...Sagas,
    Logger,
  ],
  exports: [
  ],
})
export class TenantModule { }
