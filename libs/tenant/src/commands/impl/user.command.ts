
export class CreateUserCommand {

  public constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password?: string
  ) { }

}

export class LoginCommand {

  public constructor(
    public readonly username: string,
    public readonly password: string
  ) { }

}