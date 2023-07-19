import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { TenantService } from './tenant.service';

export * from './user.service';
export * from './auth.service';
export * from './tenant.service';

export const Services = [
  UserService,
  AuthService,
  TenantService,
];