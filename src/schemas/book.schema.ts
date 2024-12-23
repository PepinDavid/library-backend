import { AllowNull, Column, DataType, Default, ForeignKey, Model, Table } from "sequelize-typescript";
import { AuthorSchema } from "./author.schema";
import { GenreSchema } from "./genre.schema";
import { IBook } from "../models";

@Table({tableName: 'books', modelName: 'Books', timestamps: true})
export class BookSchema extends Model implements IBook {
    @Column(DataType.STRING)
    title!: string;

    @ForeignKey(() => AuthorSchema)
    @AllowNull(true)
    @Column({type: DataType.INTEGER, allowNull: true})
    authorId?: number;

    @ForeignKey(() => GenreSchema)
    @AllowNull(true)
    @Column({type: DataType.INTEGER, allowNull: true})
    genreId?: number;

    @Column(DataType.INTEGER)
    publishedYear!: number;

    @Default(0)
    @Column(DataType.INTEGER)
    copiesAvailable!: number;

    @Default(0)
    @Column(DataType.INTEGER)
    copiesAvaible!: number;
}