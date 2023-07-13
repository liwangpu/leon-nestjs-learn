import { UserModule } from '@app/user';
import { Module, OnApplicationBootstrap, BeforeApplicationShutdown, OnApplicationShutdown } from '@nestjs/common';
import { SchoolModule } from './school/school.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    SchoolModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements OnApplicationBootstrap, BeforeApplicationShutdown, OnApplicationShutdown {

  public onApplicationBootstrap() {
    console.log(`app bootstrap!`);
  }

  public beforeApplicationShutdown(signal?: string) {
    console.log(`app before shutdown!`);
  }

  public onApplicationShutdown(signal?: string) {
    console.log(`app shutdown!`);
  }

}
