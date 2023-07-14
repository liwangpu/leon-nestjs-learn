import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { CommandHandlers } from './commands/handlers';
import { ProfileController } from './controllers';
import { UserController } from './controllers/user.controller';
import { User, UserSchema } from './models';
import { Services } from './services';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [
    UserController,
    ProfileController,
  ],
  providers: [
    ...CommandHandlers,
    ...Services,
  ],
  exports: [],
})
export class CompanyModule { }
