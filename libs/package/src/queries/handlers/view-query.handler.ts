import { ViewService } from '../../services';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ViewQuery } from '../impl';
import { ViewDTO } from '../../models';

@QueryHandler(ViewQuery)
export class ViewQueryHandler implements IQueryHandler<ViewQuery> {

  public constructor(
    private readonly viewSrv: ViewService,
  ) { }

  public async execute(query: ViewQuery) {
    const datas = await this.viewSrv.query(query.applicationId);
    return datas.map(d => ViewDTO.fromModel(d));
  }
}