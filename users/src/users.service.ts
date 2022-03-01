import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { UserResponse } from './interfaces/user.response';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  public async createUser(user: IUser): Promise<UserResponse> {
    const { password, ...userFields } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = new this.userModel({
      ...userFields,
      password: hashedPassword,
    });
    const userResponse = await createdUser.save();
    userResponse.password = undefined;
    return userResponse;
  }
}
