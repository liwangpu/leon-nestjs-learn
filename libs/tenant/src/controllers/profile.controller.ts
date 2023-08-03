import { Controller, Get, Inject, Logger, LoggerService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { QueryBus } from '@nestjs/cqrs';
import { UserProfileDTO } from '../models';
import { UserProfileQuery } from '../queries/impl';

@Controller('profile')
export class ProfileController {

  public constructor(
    private readonly queryBus: QueryBus,
    private readonly logger: Logger,
  ) { }

  @Get()
  public async getProfile(): Promise<UserProfileDTO> {
    // this.logger.error('xxxxxx');
    return this.queryBus.execute(new UserProfileQuery());
  }
}
