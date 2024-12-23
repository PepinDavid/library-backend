import { IsDate, IsInt, IsOptional, IsString, Min } from "class-validator";
import { IBaseModel } from "./base.models";
import { Model } from "sequelize-typescript";

export interface IBook extends IBaseModel{
    title: string;
    authorId?: number;
    genreId?: number;
    publishedYear: number;
    copiesAvailable: number;
}

export class Book implements IBook {
    @IsInt()
    id?: number;

    @IsString()
    title!: string;

    @IsInt()
    authorId?: number;

    @IsInt()
    genreId?: number;

    @IsInt()
    publishedYear!: number;
    
    @IsInt()
    @Min(0)
    copiesAvailable!: number;

    @IsDate()
    createdAt?: Date;

    @IsDate()
    updatedAt?: Date;

    @IsOptional()
    @IsDate()
    deletedAt?: Date;
}

export class CreateBookDTO extends Model implements IBook {
    @IsOptional()
    @IsInt()
    id?: number;

    @IsString()
    title!: string;

    @IsOptional()
    @IsInt()
    authorId?: number;

    @IsOptional()
    @IsInt()
    genreId?: number;

    @IsInt()
    publishedYear!: number;
    
    @IsInt()
    @Min(0)
    copiesAvailable!: number;

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

export class UpdateBookDTO implements IBook {
    @IsInt()
    id?: number;

    @IsString()
    title!: string;

    @IsInt()
    authorId?: number;

    @IsInt()
    genreId?: number;

    @IsInt()
    publishedYear!: number;
    
    @IsInt()
    @Min(0)
    copiesAvailable!: number;

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