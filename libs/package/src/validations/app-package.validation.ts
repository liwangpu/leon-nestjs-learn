import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { AppPackageService } from '../services';

@Injectable()
@ValidatorConstraint({ name: 'AppPackageExistsRule', async: true })
export class AppPackageExistsRule implements ValidatorConstraintInterface {

  public constructor(
    @Inject(forwardRef(() => AppPackageService)) private readonly appPackageSrv: AppPackageService,
  ) { }

  public async validate(name: string, args: ValidationArguments) {
    let exists = await this.appPackageSrv.checkPackageExists({ name });
    return !exists;
  }

  public defaultMessage(args: ValidationArguments) {
    return `应用包已经存在`;
  }
}

export function AppPackageExists(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'AppPackageExists',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: AppPackageExistsRule,
    });
  };
}