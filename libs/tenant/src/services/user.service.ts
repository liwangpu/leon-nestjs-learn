import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models';

@Injectable()
export class UserService {

  public constructor(@InjectModel(User.name) private model: Model<User>) { }

  public async create(user: User) {
    const createdUser = new this.model(user);
    return createdUser.save();
  }

}
