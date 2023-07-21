import { ApplicationBootstrapEvent, TenantType, UserType } from '@app/common';
import { USER_DEFAULT_PASSWORD } from '@app/common/consts';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable, switchMap } from 'rxjs';
import { CreateTenantCommand, CreateUserCommand } from '../commands/impl';
import { TenantCreatedEvent } from '../events/impl';
import { TenantService } from '../services';


@Injectable()
export class TenantSagas {

  public constructor(
    private readonly tenantSrv: TenantService,
  ) { }

  @Saga()
  public createTenantAdmin = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(TenantCreatedEvent),
        map(event => {
          return new CreateUserCommand(event.legalPerson, event.email, event.phone, event.id, UserType.admin, USER_DEFAULT_PASSWORD);
        }),
      );
  }

  @Saga()
  public initialSupplier = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(ApplicationBootstrapEvent),
        switchMap(() => this.tenantSrv.checkSupplierExists()),
        map(exists => exists ? null : new CreateTenantCommand('Lowcode', '蒲先生', 'liwang.pu@gmail.com', '15721457986', '广西来宾', TenantType.supplier))
      );
  }


}