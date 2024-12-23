import { AllowNull, Column, DataType, Default, ForeignKey, Model, Table } from "sequelize-typescript";
import { BookSchema } from "./book.schema";
import { UserSchema } from "./user.schema";
import { EStatusBorrowed, IBorrowedBook } from "../models";

@Table({tableName: 'borrowed_book', modelName: 'BorrowedBooks', timestamps: true})
export class BorrowedBookSchema extends Model implements IBorrowedBook {
    @Column(DataType.STRING)
    title!: string;

    @Column(DataType.DATE)
    borrowDate!: Date;

    @AllowNull(true)
    @Column(DataType.DATE)
    returnDate!: Date;

    @Default(EStatusBorrowed.BORROWED)
    @Column(DataType.STRING)
    status!: EStatusBorrowed;

    @ForeignKey(() => BookSchema)
    @Column(DataType.INTEGER)
    bookId!: number;

    @ForeignKey(() => UserSchema)
    @Column(DataType.INTEGER)
    userId!: number;
}