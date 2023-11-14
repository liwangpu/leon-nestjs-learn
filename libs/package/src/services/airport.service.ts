import { IdentityStore } from "@app/common";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { ClsService } from "nestjs-cls";
import { AirportDTO, Airport } from "../models";

@Injectable()
export class AirportService {
  public constructor(
    @InjectModel(Airport.name) private model: Model<Airport>,
    private readonly cls: ClsService<IdentityStore>
  ) {}

  public async create(item: Airport) {
    item.tenantId = this.getTenantId();
    const createdItem = new this.model(item);

    return createdItem.save();
  }

  public async update(item: Airport) {
    item.tenantId = this.getTenantId();
    const existingItem = await this.model.findByIdAndUpdate(item.id, item, {
      new: true,
    });
    if (!existingItem) {
      throw new NotFoundException(`记录 #${item.id} 没有找到!`);
    }
    return existingItem;
  }

  public async getById(
    id: string,
    fields: Array<string> = []
  ): Promise<Airport> {
    return this.model.findById(
      id,
      fields.length
        ? fields.reduce((mp, cur) => {
            if (cur) {
              mp[cur] = true;
            }

            return mp;
          }, {})
        : undefined
    );
  }

  public async delete(id: string) {
    return this.model.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  public async query(): Promise<Array<Airport>> {
    const tenantId = this.getTenantId();
    return this.model.find({ tenantId });
  }

  public async checkAirportExists(filter: Partial<Airport>): Promise<boolean> {
    const tenantId = this.getTenantId();
    const count = await this.model.count({ ...filter, tenantId });
    return !!count;
  }

  private getTenantId(): string {
    return this.cls.get("tenantId");
  }
}
