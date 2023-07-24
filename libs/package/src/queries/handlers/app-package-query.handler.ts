import { AppPackageService } from '../../services';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AppPackageQuery } from '../impl';
import { AppPackageDTO } from '../../models';

@QueryHandler(AppPackageQuery)
export class AppPackageQueryHandler implements IQueryHandler<AppPackageQuery> {

  public constructor(
    private readonly appPackageSrv: AppPackageService,
  ) { }

  public async execute(query: AppPackageQuery) {
    const datas = await this.appPackageSrv.query();
    return datas.map(d => AppPackageDTO.fromModel(d));
  }
}