import { Module } from '@nestjs/common';
import { CommonModule } from 'apps/common/src/common.module';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { AuthorModule } from './author/author.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogModel } from 'apps/common/src/models/blog.model';
import { UserModel } from 'apps/common/src/models/user.model';

@Module({
  imports: [
    CommonModule, SequelizeModule.forFeature([UserModel, BlogModel]), AuthorModule
  ],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule { }
