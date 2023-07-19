import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './commands/handlers';
import { ProfileController } from './controllers';
import { UserController } from './controllers/user.controller';
import { Tenant, TenantSchema, User, UserSchema } from './models';
import { Services } from './services';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TMP_JWT_SECRET } from './consts';
import { Guards } from './guards';
import { TenantController } from './controllers/tenant.controller';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Tenant.name, schema: TenantSchema },
    ]),
    JwtModule.register({
      global: true,
      secret: TMP_JWT_SECRET,
      signOptions: { expiresIn: `1 days` },
    }),
  ],
  controllers: [
    UserController,
    ProfileController,
    AuthController,
    TenantController,
  ],
  providers: [
    ...CommandHandlers,
    ...Services,
    ...Guards,
  ],
  exports: [],
})
export class TenantModule { }
