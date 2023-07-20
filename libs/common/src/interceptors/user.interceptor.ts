import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements NestInterceptor {

  public constructor(
    // private readonly cls: ClsService,
  ) { }
  
  public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(`u itc:`,);
    return next.handle();
  }
}
