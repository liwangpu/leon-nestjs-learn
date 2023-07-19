import { CreateUserHandler } from './create-user.handler';
import { LoginHandler } from './login.handler';
import { CreateTenantHandler } from './create-tenant.handler';

export const CommandHandlers = [
  CreateUserHandler,
  LoginHandler,
  CreateTenantHandler,
];