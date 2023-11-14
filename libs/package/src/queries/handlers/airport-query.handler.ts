import { AirportService } from "../../services";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { AirportQuery } from "../impl";
import { AirportDTO } from "../../models";

@QueryHandler(AirportQuery)
export class AirportQueryHandler implements IQueryHandler<AirportQuery> {
  public constructor(private readonly airportSrv: AirportService) {}

  public async execute(query: AirportQuery) {
    const datas = await this.airportSrv.query();
    return datas.map((d) => AirportDTO.fromModel(d));
  }
}
