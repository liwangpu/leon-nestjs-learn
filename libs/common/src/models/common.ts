import { UserType } from '../enums';

export interface ITokenPayload {
  userId: string;
  tenantId: string;
  userType: UserType;
}
