import { CreateViewDTO, View, ViewDTO } from '../../models';

export class CreateViewCommand {

  public constructor(
    public readonly name: string,
    public readonly applicationId: string,
    public readonly definition: string,
    public readonly icon?: string,
  ) { }

  public toModel(): View {
    const model = new View();
    model.name = this.name;
    model.applicationId = this.applicationId;
    model.definition = this.definition;
    model.icon = this.icon;
    return model;
  }

  public static fromDTO(dto: CreateViewDTO): CreateViewCommand {
    return new CreateViewCommand(dto.name, dto.applicationId, dto.definition, dto.icon);
  }

}

export class UpdateViewCommand {

  public constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly applicationId: string,
    public readonly definition: string,
    public readonly icon?: string,
  ) { }

  public static fromDTO(dto: ViewDTO): UpdateViewCommand {
    return new UpdateViewCommand(dto.id, dto.name, dto.applicationId, dto.definition, dto.icon);
  }

  public toModel(): View {
    const model = new View();
    model.id = this.id;
    model.name = this.name;
    model.applicationId = this.applicationId;
    model.definition = this.definition;
    model.icon = this.icon;
    return model;
  }

}

export class DeleteViewCommand {
  public constructor(
    public readonly id: string
  ) { }
}