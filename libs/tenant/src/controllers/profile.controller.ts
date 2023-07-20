import { Controller, Get, Req } from '@nestjs/common';
import { UserProfileDTO } from '../models';

@Controller('profile')
export class ProfileController {

  //   private reflector: Reflector
  // public constructor(
  // ) { }

  @Get()
  public async getProfile(@Req() request: Request): Promise<UserProfileDTO> {
    const profile: UserProfileDTO = { id: 'a1', name: 'Leon', email: 'liwang.pu@gmail.com' };
    // console.log(`req:`, request['user']);
    // this.connectSrv.open();
    return profile;
  }
}
