import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, CreateUserDTO } from '../models';

@Injectable()
export class UserService {

  public constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  public async create(dto: CreateUserDTO) {
    const createdCat = new this.userModel(dto);
    return createdCat.save();
  }

}
