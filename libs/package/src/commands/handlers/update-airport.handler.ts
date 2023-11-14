import { AirportService } from "../../services";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateAirportCommand, UpdateAirportCommand } from "../impl";
import { AirportDTO } from "../../models";

@CommandHandler(UpdateAirportCommand)
export class UpdateAirportHandler
  implements ICommandHandler<UpdateAirportCommand>
{
  public constructor(private readonly airportSrv: AirportService) {}

  public async execute(command: UpdateAirportCommand): Promise<AirportDTO> {
    const data = await this.airportSrv.update(command.toModel());
    return AirportDTO.fromModel(data);
  }
}
