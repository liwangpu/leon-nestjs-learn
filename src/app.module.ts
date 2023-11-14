import {
  ApplicationBootstrapEvent,
  AuthGuard,
  CommonModule,
} from "@app/common";
import { PackageModule } from "@app/package";
import { TenantModule } from "@app/tenant";
import {
  BeforeApplicationShutdown,
  Logger,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { EventBus } from "@nestjs/cqrs";
import { MongooseModule } from "@nestjs/mongoose";
import { ClsModule } from "nestjs-cls";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    CommonModule,
    TenantModule,
    PackageModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (confSrv: ConfigService, logger: Logger) => {
        const connectedString = `mongodb://${process.env["DATABASE_USER"]}:${process.env["DATABASE_PASSWORD"]}@${process.env["DATABASE_HOST"]}:${process.env["DATABASE_PORT"]}/${process.env["DATABASE_NAME"]}?authSource=admin`;
        return {
          uri: connectedString,
          retryAttempts: 2,
          // retryDelay: 1000,
          connectionErrorFactory: (err) => {
            logger.error(`connectedString:${connectedString}`);
            return err;
          },
        };
      },
      inject: [ConfigService, Logger],
    }),
    ClsModule.forRoot({
      global: true,
      middleware: {
        // automatically mount the
        // ClsMiddleware for all routes
        mount: true,
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env.development"],
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    // Logger,
  ],
})
export class AppModule
  implements
    OnApplicationBootstrap,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  public constructor(
    private readonly eventBus: EventBus,
    private readonly configService: ConfigService,
    private readonly logger: Logger
  ) {}

  public async onApplicationBootstrap() {
    this.eventBus.publish(new ApplicationBootstrapEvent());
  }

  public beforeApplicationShutdown(signal?: string) {
    // console.log(`app before shutdown!`);
  }

  public onApplicationShutdown(signal?: string) {
    // console.log(`app shutdown!`);
  }
}
