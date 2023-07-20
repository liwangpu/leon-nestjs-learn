import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';
import { TMP_JWT_SECRET } from './consts';

@Global()
@Module({
  imports: [
    CqrsModule,
    JwtModule.register({
      global: true,
      secret: TMP_JWT_SECRET,
      signOptions: { expiresIn: `1 days` },
    }),
  ],
  providers: [
    // ...Interceptors,
  ],
  exports: [
    CqrsModule,
  ],
})
export class CommonModule { }
