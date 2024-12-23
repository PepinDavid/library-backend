import { IsDate, IsInt, IsOptional, IsString } from "class-validator";
import { IBaseModel } from "./base.models";

export enum ERole {
    READER = "READER",
    ADMIN = "ADMIN",
}

export interface IUser extends IBaseModel {
    name: string;
    email: string;
    password: string;
    role: ERole;
}

export class User implements IUser {
    @IsInt()
    id?: number;

    @IsString()
    name!: string;

    @IsString()
    email!: string;

    @IsString()
    password!: string;

    @IsString()
    role!: ERole;
    
    @IsDate()
    createdAt?: Date;

    @IsDate()
    updatedAt?: Date;

    @IsDate()
    deletedAt?: Date;
}

export class CreateUserDTO implements IUser {
    @IsOptional()
    @IsInt()
    id?: number;

    @IsString()
    name!: string;

    @IsString()
    email!: string;

    @IsString()
    password!: string;

    @IsString()
    role!: ERole;
    
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

export class UpdateUserDTO implements IUser {
    @IsInt()
    id?: number;

    @IsString()
    name!: string;

    @IsString()
    email!: string;

    @IsString()
    password!: string;

    @IsString()
    role!: ERole;
    
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