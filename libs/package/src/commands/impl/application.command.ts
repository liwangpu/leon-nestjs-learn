import { Application, CreateApplicationDTO } from '../../models';

export class CreateApplicationCommand {

  public constructor(
    public readonly name: string,
    public readonly packageId: string,
    public readonly icon?: string,
  ) { }

  public toModel(): Application {
    const model = new Application();
    model.name = this.name;
    model.packageId = this.packageId;
    model.icon = this.icon;
    return model;
  }

  public static fromDTO(dto: CreateApplicationDTO): CreateApplicationCommand {
    return new CreateApplicationCommand(dto.name, dto.packageId, dto.icon);
  }

}