import { BookModule } from '@app/book';
import { UserModule } from '@app/user';
import { Module, OnApplicationBootstrap, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

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
    UserModule,
    BookModule,
    MongooseModule.forRoot(connectedString),
  ],
  controllers: [],

  providers: [],
})
export class AppModule implements OnApplicationBootstrap, BeforeApplicationShutdown, OnApplicationShutdown {

  public onApplicationBootstrap() {
    // console.log(`app bootstrap!`);
  }

  public beforeApplicationShutdown(signal?: string) {
    // console.log(`app before shutdown!`);
  }

  public onApplicationShutdown(signal?: string) {
    // console.log(`app shutdown!`);
  }

}
