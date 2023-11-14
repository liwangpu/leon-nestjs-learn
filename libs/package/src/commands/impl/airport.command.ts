import { Airport, CreateAirportDTO } from "../../models";

export class CreateAirportCommand {
  public constructor(
    public readonly name: string,
    public readonly subscription: string
  ) {}

  public toModel(): Airport {
    const model = new Airport();
    model.name = this.name;
    model.subscription = this.subscription;
    return model;
  }

  public static fromDTO(dto: CreateAirportDTO): CreateAirportCommand {
    return new CreateAirportCommand(dto.name, dto.subscription);
  }
}
