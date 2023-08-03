import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { WinstonModule, WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';
import * as winston from 'winston';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          dirname: join(__dirname, './log/error/'), //path to where save loggin result 
          filename: 'error.log', //name of file where will be saved logging result
          level: 'error',
        }),
        new winston.transports.File({
          dirname: join(__dirname, './log/warn/'),
          filename: 'warn.log',
          level: 'warn',
        }),
      ],
    })
  });

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  // app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
