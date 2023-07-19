export class CreateTenantCommand {

  public constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly address?: string
  ) { }

}