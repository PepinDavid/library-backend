import { IsDate, IsInt, IsOptional, IsString } from "class-validator";
import { IBaseModel } from "./base.models";

export enum EStatusBorrowed {
    BORROWED = "BORROWED",
    RETURNED = "RETURNED", 
};

export interface IBorrowedBook extends IBaseModel {
    bookId?: number;
    userId?: number;
    borrowDate: Date;
    returnDate: Date;
    status: EStatusBorrowed;
}

export class BorrowedBook implements IBorrowedBook {
    @IsInt()
    id?: number;

    @IsString()
    title!: string;

    @IsInt()
    bookId?: number

    @IsInt()
    userId?: number

    @IsDate()
    borrowDate!: Date

    @IsDate()
    returnDate!: Date

    @IsString()
    status!: EStatusBorrowed

    @IsDate()
    createdAt?: Date;

    @IsDate()
    updatedAt?: Date;

    @IsDate()
    deletedAt?: Date;
}

export class CreateBorrowedBookDTO implements IBorrowedBook {
    @IsOptional()
    @IsInt()
    id?: number;

    @IsString()
    title!: string;

    @IsInt()
    bookId?: number;

    @IsInt()
    userId?: number;

    @IsDate()
    borrowDate!: Date;

    @IsOptional()
    @IsDate()
    returnDate!: Date;

    @IsString()
    status!: EStatusBorrowed;

    @IsOptional()
    @IsDate()
    createdAt?: Date;

    @IsOptional()
    @IsDate()
    updatedAt?: Date;

    @IsOptional()
    @IsDate()
    deletedAt?: Date;
}

export class UpdateBorrowedBookDTO implements IBorrowedBook {
    @IsInt()
    id?: number;

    @IsString()
    title!: string;

    @IsInt()
    bookId?: number;

    @IsInt()
    userId?: number;

    @IsDate()
    borrowDate!: Date;

    @IsOptional()
    @IsDate()
    returnDate!: Date;

    @IsString()
    status!: EStatusBorrowed;

    @IsOptional()
    @IsDate()
    createdAt?: Date;

    @IsOptional()
    @IsDate()
    updatedAt?: Date;

    @IsOptional()
    @IsDate()
    deletedAt?: Date;
}