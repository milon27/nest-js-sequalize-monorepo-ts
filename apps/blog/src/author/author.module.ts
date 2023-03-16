import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogModel } from 'apps/common/src/models/blog.model';
import { CategoryModel } from 'apps/common/src/models/category.model';
import { UserModel } from 'apps/common/src/models/user.model';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';

@Module({
  imports: [SequelizeModule.forFeature([CategoryModel, BlogModel])],
  controllers: [AuthorController],
  providers: [AuthorService]
})
export class AuthorModule { }
