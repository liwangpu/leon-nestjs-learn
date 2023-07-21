import { TenantType, UserType } from '@app/common';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ClsStore } from 'nestjs-cls';
import { TenantEmailExists, TenantExists } from '../validations';

export class CreateTenantDTO {

  @IsNotEmpty({
    message: '名称为必填信息'
  })
  @TenantExists()
  public name: string;

  @IsNotEmpty({
    message: '公司法人为必填信息'
  })
  public legalPerson: string;

  @IsNotEmpty({
    message: '邮箱为必填信息'
  })
  @IsEmail()
  @TenantEmailExists()
  public email: string;
  @IsNotEmpty({
    message: '电话为必填信息'
  })
  public phone: string;
  public address: string;
  public type: TenantType;
}