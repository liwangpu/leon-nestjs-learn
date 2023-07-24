import { ITokenPayload, UserType } from '@app/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  public constructor(
    private usersService: UserService,
    private jwtService: JwtService
  ) { }

  public async signIn(username, pass) {
    const user = await this.usersService.findUserByAccount(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload: ITokenPayload = { userId: user.id, tenantId: user.tenantId, userType: UserType.admin };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
