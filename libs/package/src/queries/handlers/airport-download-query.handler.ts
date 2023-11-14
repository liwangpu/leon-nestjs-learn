import { AirportService } from "../../services";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { AirportDownloadQuery, AirportQuery } from "../impl";
import { AirportDTO } from "../../models";
import { NotFoundException } from "@nestjs/common";

@QueryHandler(AirportDownloadQuery)
export class AirportDownloadQueryHandler
  implements IQueryHandler<AirportDownloadQuery>
{
  public constructor(private readonly airportSrv: AirportService) {}

  public async execute(query: AirportDownloadQuery) {
    const data = await this.airportSrv.getById(query.id);
    if (!data) {
      throw new NotFoundException(`没有找到id为${query.id}的机场信息!`);
    }

    return data.subscription;
  }
}
