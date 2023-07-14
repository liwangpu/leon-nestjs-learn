
export class CreateUserCommand {

  public constructor(
    public readonly name: string,
    public readonly email: string
  ) { }

}