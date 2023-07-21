import { TenantType } from '@app/common';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClsService } from 'nestjs-cls';
import { Tenant } from '../models';

@Injectable()
export class TenantService {

  public constructor(
    @InjectModel(Tenant.name) private model: Model<Tenant>,
    private readonly cls: ClsService,
  ) { }

  public async create(tenant: Tenant) {
    // console.log(`tenant service get user:`, this.cls.get('user'));
    const createdTenant = new this.model(tenant);
    // createdTenant._id='defaultId';
    return createdTenant.save();
  }

  public getSupplier(): Promise<Tenant> {
    return this.model.findOne({
      type: TenantType.supplier,
    });
  }

  public async checkTenantExists(filter: Partial<Tenant>): Promise<boolean> {
    const count = await this.model.count(filter);
    return !!count;
  }

  public async checkSupplierExists(): Promise<boolean> {
    const count = await this.model.count({
      type: TenantType.supplier,
    });
    return !!count;
  }

}
