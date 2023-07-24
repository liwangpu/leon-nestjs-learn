import { IdentityStore, TenantType } from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, } from 'mongoose';
import { ClsService } from 'nestjs-cls';
import { AppPackage } from '../models';

@Injectable()
export class AppPackageService {

  public constructor(
    @InjectModel(AppPackage.name) private model: Model<AppPackage>,
    private readonly cls: ClsService<IdentityStore>,
  ) { }

  public async create(item: AppPackage) {
    item.tenantId = this.getTenantId();
    const createdItem = new this.model(item);

    return createdItem.save();
  }

  public async delete(id: string) {
    return this.model.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  public async query(): Promise<Array<AppPackage>> {
    const tenantId = this.getTenantId();
    return this.model.find({ tenantId });
  }

  public async checkPackageExists(filter: Partial<AppPackage>): Promise<boolean> {
    const tenantId = this.getTenantId();
    const count = await this.model.count({ ...filter, tenantId });
    return !!count;
  }

  private getTenantId(): string {
    return this.cls.get('tenantId');
  }

}
