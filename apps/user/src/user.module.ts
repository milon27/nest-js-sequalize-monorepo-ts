import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommonModule } from 'apps/common/src/common.module';
import { BlogModel } from 'apps/common/src/models/blog.model';
import { UserModel } from 'apps/common/src/models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [CommonModule, SequelizeModule.forFeature([BlogModel, UserModel])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
