import { IdentityStore } from '@app/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, } from 'mongoose';
import { ClsService } from 'nestjs-cls';
import { View } from '../models';

@Injectable()
export class ViewService {

  public constructor(
    @InjectModel(View.name) private model: Model<View>,
    private readonly cls: ClsService<IdentityStore>,
  ) { }

  public async create(item: View) {
    item.tenantId = this.getTenantId();
    const createdItem = new this.model(item);

    return createdItem.save();
  }

  public async update(item: View) {
    item.tenantId = this.getTenantId();
    const existingItem = await this.model.findByIdAndUpdate(item.id, item);
    return existingItem;
  }

  public async delete(id: string) {
    return this.model.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  public async query(applicationId: string): Promise<Array<View>> {
    const tenantId = this.getTenantId();
    return this.model.find({ tenantId, applicationId }, {
      name: true,
      applicationId: true,
      icon: true,
    });
  }

  public async getById(id: string, fields: Array<string> = []): Promise<View> {
    return this.model.findById(id,
      fields.length ? fields.reduce((mp, cur) => {
        if (cur) {
          mp[cur] = true;
        }

        return mp;
      }, {}) : undefined
    );
  }

  public async checkViewExists(filter: Partial<View>): Promise<boolean> {
    const tenantId = this.getTenantId();
    const count = await this.model.count({ ...filter, tenantId });
    return !!count;
  }

  private getTenantId(): string {
    return this.cls.get('tenantId');
  }

}
