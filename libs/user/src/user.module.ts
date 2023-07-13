import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { ProfileController } from './controllers';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [CqrsModule],
  controllers: [
    UserController,
    ProfileController,
  ],
  providers: [
    ...CommandHandlers,
  ],
  exports: [],
})
export class UserModule { }
