import { IsNotEmpty } from "class-validator";
import { AirportExists } from "../validations";
import { Airport } from "./airport.schema";


export class CreateAirportDTO {
  @IsNotEmpty({
    message: "名称为必填信息",
  })
  @AirportExists()
  public name: string;
  public subscription: string;
}

export class AirportDTO {
  public id: string;
  public name: string;
  public subscription: string;

  public static fromModel(model: Airport) {
    const dto = new AirportDTO();
    dto.id = model.id;
    dto.name = model.name;
    dto.subscription = model.subscription;
    return dto;
  }
}
