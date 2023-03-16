import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BlogModel } from './models/blog.model';
import { UserModel } from './models/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      synchronize: true,
      autoLoadModels: true,
      // models: [UserModel, BlogModel], // not needed
    })
  ]
})
export class CommonModule { }
