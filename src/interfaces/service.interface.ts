export interface IRead<T> {
    getAll(): Promise<T[] | null>;
    getOne(id: number | string): Promise<T | null>;
}

export interface IWrite<T, K> {
    create(data: Partial<K>): Promise<T>;
    update(id: number | string, data: Partial<K>): Promise<T>;
    delete(id: number | string): Promise<number>;
}

export interface IBaseService<T, K> extends IRead<T>, IWrite<T, K> {};