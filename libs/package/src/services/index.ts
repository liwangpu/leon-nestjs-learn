import { AppPackageService } from './app-package.service';
import { ApplicationService } from './application.service';
import { ViewService } from './view.service';

export * from './app-package.service';
export * from './application.service';
export * from './view.service';

export const Services = [
  AppPackageService,
  ApplicationService,
  ViewService,
];