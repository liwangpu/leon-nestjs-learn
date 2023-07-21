import { Controller, Get } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { IdentityStore, UserProfileDTO } from '../models';
import { UserService } from '../services';

@Controller('profile')
export class ProfileController {

  public constructor(
    private readonly cls: ClsService<IdentityStore>,
    private readonly userSrv: UserService,
  ) { }

  @Get()
  public async getProfile(): Promise<UserProfileDTO> {
    const userId = this.cls.get('userId');
    const user = await this.userSrv.getById(userId);
    return UserProfileDTO.fromModel(user);
  }
}
