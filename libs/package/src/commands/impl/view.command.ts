import { CreateViewDTO, View, ViewDTO } from '../../models';

export class CreateViewCommand {

  public constructor(
    public readonly name: string,
    public readonly applicationId: string,
    public readonly page: string,
    public readonly icon?: string,
  ) { }

  public toModel(): View {
    const model = new View();
    model.name = this.name;
    model.applicationId = this.applicationId;
    model.page = this.page;
    model.icon = this.icon;
    return model;
  }

  public static fromDTO(dto: CreateViewDTO): CreateViewCommand {
    return new CreateViewCommand(dto.name, dto.applicationId, dto.page, dto.icon);
  }

}

export class UpdateViewCommand {

  public constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly applicationId: string,
    public readonly page: string,
    public readonly icon?: string,
  ) { }

  public static fromDTO(dto: ViewDTO): UpdateViewCommand {
    return new UpdateViewCommand(dto.id, dto.name, dto.applicationId, dto.page, dto.icon);
  }

  public toModel(): View {
    const model = new View();
    console.log(`name:`,this.name);
    model.id = this.id;
    model.name = this.name;
    model.applicationId = this.applicationId;
    model.page = this.page;
    model.icon = this.icon;
    return model;
  }

}

export class DeleteViewCommand {
  public constructor(
    public readonly id: string
  ) { }
}