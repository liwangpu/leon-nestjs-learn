import { Airport, CreateAirportDTO, UpdateAirportDTO } from "../../models";

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

export class UpdateAirportCommand {
  public constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly subscription: string
  ) {}

  public static fromDTO(dto: UpdateAirportDTO): UpdateAirportCommand {
    return new UpdateAirportCommand(dto.id, dto.name, dto.subscription);
  }

  public toModel(): Airport {
    const model = new Airport();
    model.id = this.id;
    model.name = this.name;
    model.subscription = this.subscription;
    return model;
  }
}
