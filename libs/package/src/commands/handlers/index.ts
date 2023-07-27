import { CreateAppPackageHandler } from './create-app-package.handler';
import { CreateApplicationHandler } from './create-application.handler';
import { DeleteAppPackageHandler } from './delete-app-package.handler';

export const CommandHandlers = [
  CreateAppPackageHandler,
  DeleteAppPackageHandler,
  CreateApplicationHandler,
];