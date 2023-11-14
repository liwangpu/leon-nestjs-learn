import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateAirportCommand, UpdateAirportCommand } from "../commands/impl";
import { AirportDTO, CreateAirportDTO, UpdateAirportDTO } from "../models";
import { AirportQuery, AirportDownloadQuery } from "../queries/impl";
import { Public } from "@app/common";

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

  @Put(":id")
  public async update(
    @Param("id") id,
    @Body() dto: UpdateAirportDTO
  ): Promise<AirportDTO> {
    dto.id = id;
    return this.commandBus.execute(UpdateAirportCommand.fromDTO(dto));
  }

  @Public()
  @Header("Content-Type", "text/plain")
  @Get("download/:id")
  public async download(@Param("id") id: string): Promise<string> {
    return this.queryBus.execute(new AirportDownloadQuery(id));
  }

  // @Delete(':id')
  // public async delete(@Param('id') id): Promise<AirportDTO> {
  //   return this.commandBus.execute(new DeleteAppPackageCommand(id));
  // }
}
