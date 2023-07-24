import { IsNotEmpty } from 'class-validator';
import { AppPackageExists } from '../validations';
import { AppPackage } from './app-package.schema';

export class PackageQueryDTO {
  public title?: string;
}

export class CreateAppPackageDTO {
  @IsNotEmpty({
    message: '名称为必填信息'
  })
  @AppPackageExists()
  public name: string;
  public icon?: string;
}

export class AppPackageDTO {
  public id: string;
  public name: string;
  public icon?: string;

  public static fromModel(model: AppPackage) {
    const dto = new AppPackageDTO();
    dto.id = model.id;
    dto.name = model.name;
    dto.icon = model.icon;
    return dto;
  }
}