import { UserType } from '@app/common';
import { USER_DEFAULT_PASSWORD } from '@app/common/consts';
import { User } from '../../models';

export class CreateUserCommand {

  public constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly tenantId: string,
    public readonly type: UserType,
    public readonly password?: string
  ) { }

  public toModel(): User {
    const user = new User();
    user.name = this.name;
    user.email = this.email;
    user.phone = this.phone;
    user.tenantId = this.tenantId;
    user.type = this.type;
    user.password = this.password || USER_DEFAULT_PASSWORD;
    return user;
  }
}


export class SignTokenCommand {

  public constructor(
    public readonly userId: string,
  ) { }
}