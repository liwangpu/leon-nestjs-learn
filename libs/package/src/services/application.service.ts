import { IdentityStore } from '@app/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, } from 'mongoose';
import { ClsService } from 'nestjs-cls';
import { Application } from '../models';

@Injectable()
export class ApplicationService {

  public constructor(
    @InjectModel(Application.name) private model: Model<Application>,
    private readonly cls: ClsService<IdentityStore>,
  ) { }

  public async create(item: Application) {
    item.tenantId = this.getTenantId();
    const createdItem = new this.model(item);
    return createdItem.save();
  }

  public async update(item: Application) {
    item.tenantId = this.getTenantId();
    const existingItem = await this.model.findByIdAndUpdate(item.id, item);
    if (!existingItem) {
      throw new NotFoundException(`记录 #${item.id} 没有找到!`);
    }
    return existingItem;
  }


  public async getById(id: string): Promise<Application> {
    return this.model.findById(id);
  }

  public async delete(id: string) {
    return this.model.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  public async deleteByPackage(packageId: string) {
    return this.model.deleteMany({ packageId });
  }

  public async query(packageId: string): Promise<Array<Application>> {
    const tenantId = this.getTenantId();
    return this.model.find({ tenantId, packageId });
  }

  public async checkExists(filter: Partial<Application>): Promise<boolean> {
    const tenantId = this.getTenantId();
    const count = await this.model.count({ ...filter, tenantId });
    return !!count;
  }

  private getTenantId(): string {
    return this.cls.get('tenantId');
  }

}