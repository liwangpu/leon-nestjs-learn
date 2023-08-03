import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { join } from 'path';
import 'winston-daily-rotate-file';
import { format } from 'winston';
import 'winston-daily-rotate-file';
import DailyRotateFile from 'winston-daily-rotate-file';

const LEVEL = Symbol.for('level');

/**
 * Log only the messages the match `level`.
 */
function filterOnly(level) {
  return format(function (info) {
    if (info[LEVEL] === level) {
      return info;
    }
  })();
}

function generateCommonRotateFileOption(level: string): DailyRotateFile.DailyRotateFileTransportOptions {
  return {
    level,
    format: filterOnly(level),
    dirname: join(__dirname, `./log/${level}/`),
    filename: '%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
  };
}

export function createLogger() {
  return WinstonModule.createLogger({
    level: 'warn',
    // level权重为 {
    //   error: 0,
    //   warn: 1,
    //   info: 2,
    //   http: 3,
    //   verbose: 4,
    //   debug: 5,
    //   silly: 6
    // },
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple()
    ),
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.colorize(),
          winston.format.simple()
        ),
      }),
      new winston.transports.DailyRotateFile(
        generateCommonRotateFileOption('error')
      ),
      new winston.transports.DailyRotateFile(
        generateCommonRotateFileOption('warn')
      ),
    ],
  });
}