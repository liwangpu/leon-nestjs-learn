import { Body, Controller, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateAirportCommand } from "../commands/impl";
import { AirportDTO, CreateAirportDTO } from "../models";
import { AirportQuery } from "../queries/impl";

@Controller("airport")
export class AirportController {
  public constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Post("query")
  public async query(@Body() dto: AirportQuery): Promise<Array<AirportDTO>> {
    return this.queryBus.execute(new AirportQuery());
  }

  @Post()
  public async create(@Body() dto: CreateAirportDTO): Promise<AirportDTO> {
    return this.commandBus.execute(CreateAirportCommand.fromDTO(dto));
  }

  // @Delete(':id')
  // public async delete(@Param('id') id): Promise<AirportDTO> {
  //   return this.commandBus.execute(new DeleteAppPackageCommand(id));
  // }
}
