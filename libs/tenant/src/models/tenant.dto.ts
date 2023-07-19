import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateTenantDTO {

  @IsNotEmpty({
    message: '名称为必填信息'
  })
  public name: string;

  @IsNotEmpty({
    message: '邮箱为必填信息'
  })
  @IsEmail()
  public email: string;

  public address: string;
}