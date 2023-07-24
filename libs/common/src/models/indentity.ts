import { ClsStore } from 'nestjs-cls';
import { UserType } from '../enums';

export interface IdentityStore extends ClsStore {
  userId: string;
  tenantId: string;
  userType: UserType;
}