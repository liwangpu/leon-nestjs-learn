import { CreateAppPackageHandler } from './create-app-package.handler';
import { CreateApplicationHandler } from './create-application.handler';
import { DeleteAppPackageHandler } from './delete-app-package.handler';
import { UpdateApplicationHandler } from './update-appliction.handler';

export const CommandHandlers = [
  CreateAppPackageHandler,
  DeleteAppPackageHandler,
  CreateApplicationHandler,
  UpdateApplicationHandler,
];