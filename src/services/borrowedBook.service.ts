import { IBorrowedBook } from "../models";
import { BorrowedBookSchema } from "../schemas";
import { BaseService } from "./base.service"

export class BorrowedBookService extends BaseService<BorrowedBookSchema, IBorrowedBook> {
    constructor(model: typeof BorrowedBookSchema) {
        super(model);
    }
}