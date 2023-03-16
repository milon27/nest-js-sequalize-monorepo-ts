import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommonModule } from 'apps/common/src/common.module';
import { BlogModel } from 'apps/common/src/models/blog.model';
import { CategoryModel } from 'apps/common/src/models/category.model';
import { UserModel } from 'apps/common/src/models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  //BlogModel has not been defined : [UserModel] so user related to blog
  // [BlogModel, UserModel] categoryModel is not defined, because blog related to category
  imports: [CommonModule, SequelizeModule.forFeature([BlogModel, CategoryModel, UserModel])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
