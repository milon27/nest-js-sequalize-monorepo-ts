
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { CategoryModel } from './category.model';
import { UserModel } from './user.model';

@Table({ tableName: 'blog', timestamps: true, createdAt: 'created_at', updatedAt: 'updated_at' })
export class BlogModel extends Model {
    @Column({ field: 'id', type: DataType.BIGINT, primaryKey: true, autoIncrement: true })
    id: number;

    @Column({ field: 'title', type: DataType.STRING })
    title: string;

    @Column({ field: 'content', type: DataType.STRING })
    content: string;

    // @Column({
    //     field: 'user_id', type: DataType.BIGINT,
    //     references: { model: UserModel, key: "id" },
    // })
    // userId: string;

    @ForeignKey(() => UserModel)
    @Column({
        field: 'user_id', type: DataType.BIGINT
    })
    userId: string;
    @BelongsTo(() => UserModel)
    user: UserModel


    @ForeignKey(() => CategoryModel)
    @Column({
        field: 'category_id', type: DataType.BIGINT
    })
    categoryId: string;
    @BelongsTo(() => CategoryModel)
    category: CategoryModel

    //todo: Error: Model not initialized: Member "getTableName" cannot be called. "CategoryModel" needs to be added to a Sequelize instance. when use only reference without forigen key and belogns to key
    // @Column({
    //     field: 'category_id', type: DataType.BIGINT, references: {
    //         model: CategoryModel,
    //         key: "id"
    //     }
    // })
    // categoryId: string;
}

// connect this model in db.module.ts (will auto connect)