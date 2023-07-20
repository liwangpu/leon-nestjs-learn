import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { TenantService } from '../services';

@Injectable()
@ValidatorConstraint({ name: 'TenantExistsRule', async: true })
export class TenantExistsRule implements ValidatorConstraintInterface {

  public constructor(
    @Inject(forwardRef(() => TenantService)) private readonly tenantSrv: TenantService,
  ) { }

  public async validate(name: string, args: ValidationArguments) {
    // console.log(`args:`, args);
    let exists = await this.tenantSrv.checkTenantExists({ name });
    return !exists;
  }

  public defaultMessage(args: ValidationArguments) {
    return `租户已经存在`;
  }
}

export function TenantExists(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'TenantExists',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: TenantExistsRule,
    });
  };
}

@Injectable()
@ValidatorConstraint({ name: 'TenantEmailExistsRule', async: true })
export class TenantEmailExistsRule implements ValidatorConstraintInterface {

  public constructor(
    @Inject(forwardRef(() => TenantService)) private readonly tenantSrv: TenantService,
  ) { }

  public async validate(email: string, args: ValidationArguments) {
    let exists = await this.tenantSrv.checkTenantExists({ email });
    return !exists;
  }

  public defaultMessage(args: ValidationArguments) {
    return `租户邮箱已经使用`;
  }
}

export function TenantEmailExists(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'TenantEmailExists',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: TenantEmailExistsRule,
    });
  };
}