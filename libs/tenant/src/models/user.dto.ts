import { UserType } from '@app/common';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ClsStore } from 'nestjs-cls';
import { User } from './user.schema';

export interface IdentityStore extends ClsStore {
  userId: string;
  tenantId: string;
  userType: UserType;
}

export class CreateUserDTO {

  @IsNotEmpty({
    message: '姓名为必填信息'
  })
  public name: string;

  @IsEmail()
  public email: string;
}

export class LoginDTO {

  @IsNotEmpty({
    message: '用户名为必填信息'
  })
  public username: string;

  @IsNotEmpty({
    message: '密码为必填信息'
  })
  public password: string;
}

export class UserProfileDTO {
  public id: string;
  public name: string;
  public email: string;
  public phone: string;
  public type: UserType;
  public tenantId: string;

  public static fromModel(user: User): UserProfileDTO {
    const dto = new UserProfileDTO();
    dto.id = user.id;
    dto.name = user.name;
    dto.email = user.email;
    dto.phone = user.phone;
    dto.type = user.type;
    dto.tenantId = user.tenantId;
    return dto;
  }
}