import { Model } from "sequelize-typescript";
import { IBaseService } from "../interfaces/service.interface";
import { FindOptions, InferAttributes, InferCreationAttributes, WhereOptions } from "sequelize";
import { NotFoundError } from "../errors/notFound";

export abstract class BaseService<T extends Model<InferAttributes<T>, InferCreationAttributes<T>>, K> implements IBaseService<T, K> {
    constructor(
        protected readonly model: {new (): T } & typeof Model,
    ) {}

    async getAll(options?: FindOptions): Promise<T[] | null> {
        try {
            let clauseWhere = {};

            if (options) {
                clauseWhere = options;
            }

            return await this.model.findAll(clauseWhere) as T[];
        } catch(error: unknown) {
            throw new Error(`Error getAll service ${error}`);
        }
    }

    async getOne(id: number | string): Promise<T | null> {
        try {
            const record = await this.model.findByPk(id);

            if (!record) {
                throw new NotFoundError(`Record with ${id} not found`);
            }

            return record as T;
        } catch(error: unknown) {
            throw new Error(`Error getOne service ${error}`);
        }
    }

    async create(data: Partial<K>): Promise<T> {
        try {
            return await this.model.create(data) as T;
        } catch(error: unknown) {
            throw new Error(`Error create service ${error}`)
        }
    }

    async update(id: number | string, data: Partial<K>): Promise<T> {
        try {
            const oldEntity = await this.model.findByPk(id);

            if (!oldEntity) {
                throw new NotFoundError(`Impossible to update, Entity with ${id} not found`);
            }

            return await oldEntity.update(data) as T;
        } catch(error: unknown) {
            throw new Error(`Error update service ${error}`);
        }
    }

    async delete(id: number | string): Promise<number> {
        try {

            const whereClause: WhereOptions = {
                id
            };

            return await this.model.destroy({where: whereClause}) as number;
        } catch (error: unknown) {
            throw new Error(`Error delete service ${error}`);
        }
    }
}