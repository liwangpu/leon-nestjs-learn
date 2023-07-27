import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { UserProfileDTO } from '../models';
import { UserProfileQuery } from '../queries/impl';

@Controller('profile')
export class ProfileController {

  public constructor(
    private readonly queryBus: QueryBus,
  ) { }

  @Get()
  public async getProfile(): Promise<UserProfileDTO> {
    return this.queryBus.execute(new UserProfileQuery());
  }
}
