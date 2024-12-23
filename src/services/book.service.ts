import { IBook } from "../models";
import { BookSchema } from "../schemas";
import { BaseService } from "./base.service";

export class BookService extends BaseService<BookSchema, IBook> {
    constructor(model: typeof BookSchema) {
        super(model);
    }
}