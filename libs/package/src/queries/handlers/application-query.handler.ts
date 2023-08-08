import { ApplicationService } from '../../services';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ApplicationQuery } from '../impl';
import { ApplicationDTO } from '../../models';

@QueryHandler(ApplicationQuery)
export class ApplicationQueryHandler implements IQueryHandler<ApplicationQuery> {

  public constructor(
    private readonly appSrv: ApplicationService,
  ) { }

  public async execute(query: ApplicationQuery) {
    const datas = await this.appSrv.query(query.packageId);
    return datas.map(d => ApplicationDTO.fromModel(d));
  }
}