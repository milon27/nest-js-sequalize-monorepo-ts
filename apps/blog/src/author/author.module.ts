import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogModel } from 'apps/common/src/models/blog.model';
import { UserModel } from 'apps/common/src/models/user.model';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';

@Module({
  imports: [SequelizeModule.forFeature([UserModel, BlogModel])],
  controllers: [AuthorController],
  providers: [AuthorService]
})
export class AuthorModule { }
