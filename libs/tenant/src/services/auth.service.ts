import { ITokenPayload, UserType } from '@app/common';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  public constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  public async signIn(userId: string) {
    const user = await this.userService.getById(userId);
    const payload: ITokenPayload = { userId: user.id, tenantId: user.tenantId, userType: UserType.admin };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
