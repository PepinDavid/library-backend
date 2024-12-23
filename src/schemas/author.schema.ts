import { Column, DataType, Model, Table } from "sequelize-typescript";
import { IAuthor } from "../models";

@Table({tableName: 'authors', modelName: 'Authors', timestamps: true})
export class AuthorSchema extends Model implements IAuthor {
    @Column(DataType.STRING)
    lastname!: string;

    @Column(DataType.STRING)
    firstname!: string;
}