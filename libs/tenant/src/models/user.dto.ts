import { IsEmail, IsNotEmpty } from 'class-validator';

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