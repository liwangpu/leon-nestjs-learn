import { ApplicationBootstrapEvent, TenantType } from '@app/common';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable, switchMap } from 'rxjs';
import { CreateTenantCommand } from '../commands/impl';
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
        // delay(200),
        map(event => {
          console.log(`sagas create tenant admin:`, event);
          // return new DropAncientItemCommand(event.heroId, itemId);
          return null;
        }),
      );
  }

  @Saga()
  public initialSupplier = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(ApplicationBootstrapEvent),
        switchMap(() => this.tenantSrv.checkSupplierExists()),
        map(exists => exists ? null : new CreateTenantCommand('Lowcode', '蒲先生', 'liwang.pu@gmail.com', '广西来宾', TenantType.supplier))
      );
  }


}