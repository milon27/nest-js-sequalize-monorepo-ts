
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
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
}

// connect this model in db.module.ts (will auto connect)