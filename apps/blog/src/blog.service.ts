import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BlogModel } from 'apps/common/src/models/blog.model';

@Injectable()
export class BlogService {
  constructor(
    // @Inject('BLOG_REPOSITORY') private blogModel: typeof BlogModel
    @InjectModel(BlogModel)
    private blogModel: typeof BlogModel,
  ) { }

  getHello() {
    return this.blogModel.findAll();
  }
}
