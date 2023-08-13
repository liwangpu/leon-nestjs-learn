import { Application, ApplicationDTO, CreateApplicationDTO, CreateViewDTO, View } from '../../models';

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