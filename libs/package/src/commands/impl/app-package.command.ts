import { AppPackage, CreateAppPackageDTO } from '../../models';

export class CreateAppPackageCommand {

  public constructor(
    public readonly name: string,
    public readonly icon?: string,
  ) { }

  public toModel(): AppPackage {
    const model = new AppPackage();
    model.name = this.name;
    model.icon = this.icon;
    return model;
  }

  public static fromDTO(dto: CreateAppPackageDTO): CreateAppPackageCommand {
    return new CreateAppPackageCommand(dto.name, dto.icon);
  }
}

export class DeleteAppPackageCommand {

  public constructor(
    public readonly id: string,
  ) { }
  
}