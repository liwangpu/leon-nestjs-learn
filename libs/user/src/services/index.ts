import { AuthService } from './auth.service';
import { UserService } from './user.service';

export * from './user.service';
export * from './auth.service';

export const Services = [
  UserService,
  AuthService,
];