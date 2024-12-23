import { IsDate, IsInt, IsOptional, IsString } from "class-validator";
import { IBaseModel } from "./base.models";

export interface IGenre extends IBaseModel {
    name: string;
    description: string;
}

export class Genre implements IGenre {
    @IsInt()
    id?: number;

    @IsString()
    name!: string;

    @IsString()
    description!: string;

    @IsDate()
    createdAt?: Date;

    @IsDate()
    updatedAt?: Date;

    @IsDate()
    deletedAt?: Date;
}

export class CreateGenreDTO implements IGenre {
    @IsOptional()
    @IsInt()
    id?: number;

    @IsString()
    name!: string;

    @IsString()
    description!: string;

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

export class UpdateGenreDTO implements IGenre {
    @IsInt()
    id?: number;

    @IsString()
    name!: string;

    @IsString()
    description!: string;

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