import { IdentityStore, Public } from "@app/common";
import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  BadRequestException,
} from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { JwtService } from "@nestjs/jwt";
import { SignTokenCommand } from "../commands/impl";
import { LoginDTO, RefreshTokenDTO } from "../models";
import { UserService } from "../services";

@Controller("auth")
export class AuthController {
  public constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly commandBus: CommandBus
  ) {}

  @Public()
  @Post("login")
  public async create(@Body() dto: LoginDTO): Promise<any> {
    const user = await this.userService.findUserByAccount(dto.username);
    if (user?.password !== dto.password) {
      throw new UnauthorizedException();
    }

    return this.commandBus.execute(new SignTokenCommand(user.id));
  }

  @Public()
  @Post("refresh")
  public async refresh(@Body() dto: RefreshTokenDTO): Promise<any> {
    if (!dto?.access_token) {
      throw new BadRequestException();
    }
    const { userId } = this.jwtService.decode(dto.access_token, {
      complete: false,
    }) as IdentityStore;
    return this.commandBus.execute(new SignTokenCommand(userId));
  }
}
