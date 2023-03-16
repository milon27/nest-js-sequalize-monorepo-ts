
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { BlogModel } from './blog.model';

@Table({ tableName: 'category', timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' })
export class CategoryModel extends Model {
    @Column({ field: 'id', type: DataType.BIGINT, primaryKey: true, autoIncrement: true })
    id: number;

    @Column({ field: 'title', type: DataType.STRING })
    title: string;

    @HasMany(() => BlogModel)
    blogs: BlogModel
}