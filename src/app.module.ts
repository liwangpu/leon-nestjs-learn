import { BookModule } from '@app/book';
import { ApplicationBootstrapEvent, AuthGuard, CommonModule } from '@app/common';
import { TenantModule } from '@app/tenant';
import { Module, OnApplicationBootstrap, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { EventBus } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { ClsModule } from 'nestjs-cls';

const connectedInfo = {
  user: 'leon',
  password: 'Leon.pu199139!',
  host: '1.116.37.43',
  port: 9703,
  db: 'lowcode',
};

const connectedString = `mongodb://${connectedInfo.user}:${connectedInfo.password}@${connectedInfo.host}:${connectedInfo.port}/${connectedInfo.db}?authSource=admin`;

@Module({
  imports: [
    CommonModule,
    TenantModule,
    BookModule,
    MongooseModule.forRoot(connectedString),
    ClsModule.forRoot({
      global: true,
      middleware: {
        // automatically mount the
        // ClsMiddleware for all routes
        mount: true,
      },
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements OnApplicationBootstrap, BeforeApplicationShutdown, OnApplicationShutdown {

  public constructor(
    private readonly eventBus: EventBus,
  ) { }

  public async onApplicationBootstrap() {
    // console.log(`app bootstrap!`);
    this.eventBus.publish(new ApplicationBootstrapEvent());
  }

  public beforeApplicationShutdown(signal?: string) {
    // console.log(`app before shutdown!`);
  }

  public onApplicationShutdown(signal?: string) {
    // console.log(`app shutdown!`);
  }

}
