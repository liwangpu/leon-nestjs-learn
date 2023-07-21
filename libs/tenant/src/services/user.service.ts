import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User } from '../models';

@Injectable()
export class UserService {

  public constructor(@InjectModel(User.name) private model: Model<User>) { }

  public async create(user: User) {
    const createdUser = new this.model(user);
    return createdUser.save();
  }

  public async getById(id: string): Promise<User> {
    return this.model.findById(id);
  }

  public async findUserByAccount(account: string): Promise<User> {
    return this.model.findOne({
      $or: [
        { email: account },
        { phone: account },
      ]
    });
  }

}
