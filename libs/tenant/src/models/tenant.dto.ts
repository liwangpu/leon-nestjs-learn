import { IsEmail, IsNotEmpty } from 'class-validator';
import { TenantType } from '../enums';

export class CreateTenantDTO {

  @IsNotEmpty({
    message: '名称为必填信息'
  })
  public name: string;

  @IsNotEmpty({
    message: '公司法人为必填信息'
  })
  public legalPerson: string;

  @IsNotEmpty({
    message: '邮箱为必填信息'
  })
  @IsEmail()
  public email: string;

  public address: string;
  public type: TenantType;
}