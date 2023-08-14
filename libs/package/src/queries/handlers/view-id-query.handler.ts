import { ViewService } from '../../services';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ViewIdQuery } from '../impl';
import { ViewDTO } from '../../models';
import { NotFoundException } from '@nestjs/common';

@QueryHandler(ViewIdQuery)
export class ViewIdQueryHandler implements IQueryHandler<ViewIdQuery> {

  public constructor(
    private readonly viewSrv: ViewService,
  ) { }

  public async execute(query: ViewIdQuery) {
    const model = await this.viewSrv.getById(query.id);

    if (!model) {
      throw new NotFoundException(`没有找到id为${query.id}的视图!`);
    }

    return ViewDTO.fromModel(model);
  }
}