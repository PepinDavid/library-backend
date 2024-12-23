import { Table, Model, Column, DataType, Unique } from "sequelize-typescript";
import { ERole, IUser } from "../models";

@Table({tableName: 'users', modelName: 'Users', timestamps: true})
export class UserSchema extends Model implements IUser {
    @Column(DataType.STRING)
    name!: string;
    
    @Unique(true)
    @Column(DataType.STRING)
    email!: string;
    
    @Column(DataType.STRING)
    password!: string;
    
    @Column(DataType.STRING)
    role!: ERole;
}