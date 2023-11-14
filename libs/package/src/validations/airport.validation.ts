import { forwardRef, Inject, Injectable } from "@nestjs/common";
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { AirportService } from "../services";

@Injectable()
@ValidatorConstraint({ name: "AirportExistsRule", async: true })
export class AirportExistsRule implements ValidatorConstraintInterface {
  public constructor(
    @Inject(forwardRef(() => AirportService))
    private readonly airportSrv: AirportService
  ) {}

  public async validate(name: string, args: ValidationArguments) {
    const exists = await this.airportSrv.checkAirportExists({ name });
    console.log(`exists:`, exists);
    return !exists;
  }

  public defaultMessage(args: ValidationArguments) {
    return `机场已经存在`;
  }
}

export function AirportExists(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: "AppPackageExists",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: AirportExistsRule,
    });
  };
}
