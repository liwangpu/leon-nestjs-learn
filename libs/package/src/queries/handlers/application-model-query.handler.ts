import { ApplicationService } from '../../services';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ApplicationModelQuery } from '../impl';
import { ApplicationModelDTO } from '../../models';

@QueryHandler(ApplicationModelQuery)
export class ApplicationModelQueryHandler implements IQueryHandler<ApplicationModelQuery> {

  public constructor(
    private readonly appSrv: ApplicationService,
  ) { }

  public async execute(query: ApplicationModelQuery): Promise<ApplicationModelDTO> {
    const model = await this.appSrv.getById(query.id, ['name', 'icon', 'fields']);
    return ApplicationModelDTO.fromModel(model);
  }
}