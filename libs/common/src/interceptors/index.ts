import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserInterceptor } from './user.interceptor';

export const Interceptors = [
  {
    provide: APP_INTERCEPTOR,
    useClass: UserInterceptor,
  },
];