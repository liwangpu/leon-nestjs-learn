import { Application, ApplicationDTO, CreateApplicationDTO } from '../../models';

export class CreateApplicationCommand {

  public constructor(
    public readonly name: string,
    public readonly packageId: string,
    public readonly page: string,
    public readonly fields: Array<any>,
    public readonly icon?: string,
  ) { }

  public toModel(): Application {
    const model = new Application();
    model.name = this.name;
    model.packageId = this.packageId;
    model.page = this.page;
    model.fields = this.fields;
    model.icon = this.icon;
    return model;
  }

  public static fromDTO(dto: CreateApplicationDTO): CreateApplicationCommand {
    return new CreateApplicationCommand(dto.name, dto.packageId, dto.page,dto.fields, dto.icon);
  }

}

export class UpdateApplicationCommand {

  public constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly packageId: string,
    public readonly page: string,
    public readonly fields: Array<any>,
    public readonly icon?: string,
  ) { }

  public static fromDTO(dto: ApplicationDTO): UpdateApplicationCommand {
    return new UpdateApplicationCommand(dto.id, dto.name, dto.packageId, dto.page, dto.fields, dto.icon);
  }

  public toModel(): Application {
    const model = new Application();
    model.id = this.id;
    model.name = this.name;
    model.packageId = this.packageId;
    model.page = this.page;
    model.fields = this.fields;
    model.icon = this.icon;
    return model;
  }

}