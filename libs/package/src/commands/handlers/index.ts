import { CreateAppPackageHandler } from './create-app-package.handler';
import { CreateApplicationHandler } from './create-application.handler';
import { CreateViewHandler } from './create-view.handler';
import { DeleteAppPackageHandler } from './delete-app-package.handler';
import { DeleteViewHandler } from './delete-view.handler';
import { UpdateApplicationHandler } from './update-appliction.handler';
import { UpdateViewHandler } from './update-view.handler';

export const CommandHandlers = [
  CreateAppPackageHandler,
  DeleteAppPackageHandler,
  CreateApplicationHandler,
  UpdateApplicationHandler,
  CreateViewHandler,
  UpdateViewHandler,
  DeleteViewHandler,
];