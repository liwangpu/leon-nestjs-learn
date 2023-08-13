import { AppPackage, AppPackageSchema } from './app-package.schema';
import { Application, ApplicationSchema } from './application.schema';
import { View, ViewSchema } from './view.schema';

export * from './app-package.dto';
export * from './app-package.schema';
export * from './application.dto';
export * from './application.schema';
export * from './view.dto';
export * from './view.schema';

export const SchemaDefinitions = [
  { name: AppPackage.name, schema: AppPackageSchema },
  { name: Application.name, schema: ApplicationSchema },
  { name: View.name, schema: ViewSchema },
];