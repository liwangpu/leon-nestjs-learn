import { IsNotEmpty } from 'class-validator';
import { View } from './view.schema';

export class CreateViewDTO {
  @IsNotEmpty({
    message: '名称为必填信息'
  })
  public name: string;
  @IsNotEmpty({
    message: '应用包为必填信息'
  })
  public applicationId: string;
  @IsNotEmpty({
    message: '视图定义为必填信息'
  })
  public page: string;
  public icon?: string;
}

export class ViewQueryDTO {
  @IsNotEmpty({
    message: '应用为必填信息'
  })
  public applicationId: string;
}

export class ViewDTO {
  public id: string;
  public name: string;
  public applicationId: string;
  public page: string;
  public fields: Array<any>;
  public icon?: string;

  public static fromModel(model: View): ViewDTO {
    const dto = new ViewDTO();
    dto.id = model.id;
    dto.name = model.name;
    dto.applicationId = model.applicationId;
    dto.page = model.page;
    dto.icon = model.icon;
    return dto;
  }
}