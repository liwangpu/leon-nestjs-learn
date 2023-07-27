import { AppPackageService } from './app-package.service';
import { ApplicationService } from './application.service';

export * from './app-package.service';
export * from './application.service';

export const Services = [
  AppPackageService,
  ApplicationService,
];