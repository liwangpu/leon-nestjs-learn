import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './commands/handlers';
import { ProfileController } from './controllers';
import { UserController } from './controllers/user.controller';
import { User, UserSchema } from './models';
import { Services } from './services';
import { AuthController } from './controllers/auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
    JwtModule.register({
      global: true,
      secret: '12332423423423423423324',
      signOptions: { expiresIn: `1 days` },
    }),
  ],
  controllers: [
    UserController,
    ProfileController,
    AuthController,
  ],
  providers: [
    ...CommandHandlers,
    ...Services,
  ],
  exports: [],
})
export class UserModule { }
