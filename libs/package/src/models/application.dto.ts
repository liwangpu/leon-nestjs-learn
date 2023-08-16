import { IsNotEmpty } from 'class-validator';
import { Application } from './application.schema';

export class CreateApplicationDTO {
  @IsNotEmpty({
    message: '名称为必填信息'
  })
  // @AppPackageExists()
  public name: string;
  @IsNotEmpty({
    message: '应用包为必填信息'
  })
  public packageId: string;
  @IsNotEmpty({
    message: '页面定义为必填信息'
  })
  public definition: string;
  public fields: Array<any>;
  public icon?: string;
}

export class ApplicationQueryDTO {
  @IsNotEmpty({
    message: '应用包为必填信息'
  })
  public packageId: string;
}

export class ApplicationDTO {
  public id: string;
  public name: string;
  public packageId: string;
  public definition: string;
  public fields: Array<any>;
  public icon?: string;

  public static fromModel(model: Application): ApplicationDTO {
    const dto = new ApplicationDTO();
    dto.id = model.id;
    dto.name = model.name;
    dto.packageId = model.packageId;
    dto.definition = model.definition;
    dto.fields = model.fields;
    dto.icon = model.icon;
    return dto;
  }
}

export class ApplicationModelDTO {
  public id: string;
  public name: string;
  public packageId: string;
  public definition: string;
  public fields: Array<any>;
  public icon?: string;

  public static fromModel(model: Application): ApplicationModelDTO {
    const dto = new ApplicationModelDTO();
    dto.id = model.id;
    dto.name = model.name;
    dto.packageId = model.packageId;
    dto.definition = model.definition;
    dto.fields = model.fields;
    dto.icon = model.icon;
    return dto;
  }
}
