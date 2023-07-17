import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { LoginCommand } from '../commands/impl';
import { LoginDTO } from '../models';

@Controller('auth')
export class AuthController {

  public constructor(
    private readonly commandBus: CommandBus,
  ) { }

  @Post('login')
  public async create(@Body() dto: LoginDTO): Promise<any> {
    console.log(`loging:`, dto);
    return this.commandBus.execute(new LoginCommand(dto.username, dto.password));
  }

}
