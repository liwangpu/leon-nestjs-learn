import { AirportService } from "../../services";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateAirportCommand } from "../impl";
import { AirportDTO } from "../../models";

@CommandHandler(CreateAirportCommand)
export class CreateAirportHandler
  implements ICommandHandler<CreateAirportCommand>
{
  public constructor(private readonly airportSrv: AirportService) {}

  public async execute(command: CreateAirportCommand): Promise<AirportDTO> {
    const createdItem = await this.airportSrv.create(command.toModel());
    return AirportDTO.fromModel(createdItem);
  }
}
