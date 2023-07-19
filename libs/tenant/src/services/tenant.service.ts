import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tenant } from '../models';

@Injectable()
export class TenantService {

  public constructor(@InjectModel(Tenant.name) private model: Model<Tenant>) { }

  public async create(tenant: Tenant) {
    const createdTenant = new this.model(tenant);
    return createdTenant.save();
  }

}
