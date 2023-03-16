import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserModel } from 'apps/common/src/models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserModel) private userModel: typeof UserModel) { }
  getHello(): string {
    return 'Hello World!';
  }
}
