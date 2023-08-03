import { Global, Logger, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

@Global()
@Module({
  imports: [
    CqrsModule,
  ],
  providers:[
    Logger,
  ],
  exports: [
    CqrsModule,
    Logger,
  ],
})
export class CommonModule { }
