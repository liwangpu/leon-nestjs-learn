import { Controller, Get } from '@nestjs/common';
import { IUserProfile } from '../interfaces';

@Controller('profile')
export class ProfileController {

  public constructor() { }

  @Get()
  public async getHello(): Promise<IUserProfile> {
    const profile: IUserProfile = { id: 'a1', name: 'Leon' };
    // this.connectSrv.open();
    return profile;
  }
}
