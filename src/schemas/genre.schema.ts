import { Column, DataType, Model, Table } from "sequelize-typescript";
import { IGenre } from "../models";

@Table({tableName: 'genres', modelName: 'Genres', timestamps: true})
export class GenreSchema extends Model implements IGenre {
    @Column(DataType.STRING)
    name!: string;

    @Column(DataType.STRING)
    description!: string;
}