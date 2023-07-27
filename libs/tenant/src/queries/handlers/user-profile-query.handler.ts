import { TenantService, UserService } from '../../services';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserProfileQuery } from '../impl';
import { ClsService } from 'nestjs-cls';
import { IdentityStore } from '@app/common';
import { UserProfileDTO } from '../../models';

@QueryHandler(UserProfileQuery)
export class UserProfileQueryHandler implements IQueryHandler<UserProfileQuery> {

  public constructor(
    private readonly cls: ClsService<IdentityStore>,
    private readonly userSrv: UserService,
    private readonly tenantSrv: TenantService,
  ) { }

  public async execute(query: UserProfileQuery) {
    const userId = this.cls.get('userId');
    const tenantId = this.cls.get('tenantId');
    const user = await this.userSrv.getById(userId);
    const dto = UserProfileDTO.fromModel(user);
    const tenant = await this.tenantSrv.getById(tenantId);
    dto.tenantName = tenant.name;
    return dto;
  }
}