import { IsDate, IsInt, IsOptional, IsString } from "class-validator";
import { IBaseModel } from "./base.models";

export interface IAuthor extends IBaseModel{
    lastname: string;
    firstname: string;
}

export class Author implements IAuthor {
    @IsInt()
    id?: number;

    @IsString()
    lastname!: string;

    @IsString()
    firstname!: string;

    @IsDate()
    createdAt?: Date;

    @IsDate()
    updatedAt?: Date;

    @IsDate()
    deletedAt?: Date;
}

export class CreateAuthorDTO implements IAuthor {
    @IsOptional()
    @IsInt()
    id?: number;

    @IsString()
    lastname!: string;

    @IsString()
    firstname!: string;


    @IsDate()
    createdAt?: Date;

    @IsDate()
    updatedAt?: Date;

    @IsOptional()
    @IsDate()
    deletedAt?: Date;
}

export class UpdateAuthorDTO implements IAuthor {
    @IsInt()
    id?: number;

    @IsString()
    lastname!: string;

    @IsString()
    firstname!: string;

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