import { AppPackageQueryHandler } from './app-package-query.handler';
import { ApplicationModelQueryHandler } from './application-model-query.handler';
import { ApplicationQueryHandler } from './application-query.handler';
import { ViewQueryHandler } from './view-query.handler';

export const QueryHandlers = [
  AppPackageQueryHandler,
  ApplicationQueryHandler,
  ApplicationModelQueryHandler,
  ViewQueryHandler,
];