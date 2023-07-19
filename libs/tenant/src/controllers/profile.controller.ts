import { Controller, ExecutionContext, Get, Req, UseGuards } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '../guards';
import { IUserProfile } from '../interfaces';

@Controller('profile')
export class ProfileController {

  // public constructor(
  //   private reflector: Reflector
  // ) { }

  @Get()
  @UseGuards(AuthGuard)
  public async getProfile(@Req() request: Request): Promise<IUserProfile> {
    const profile: IUserProfile = { id: 'a1', name: 'Leon' };
    // console.log(`req:`, request['user']);
    // this.connectSrv.open();
    return profile;
  }
}
