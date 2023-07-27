import { CreateUserHandler } from './create-user.handler';
import { SignTokenHandler } from './sign-token.handler';
import { CreateTenantHandler } from './create-tenant.handler';

export const CommandHandlers = [
  CreateUserHandler,
  SignTokenHandler,
  CreateTenantHandler,
];