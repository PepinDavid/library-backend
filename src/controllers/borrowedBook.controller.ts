import { Request, Response } from "express";
import { IBaseController } from "../interfaces/controller.interface";
import { InternalServerError } from "../errors/internalServerError";
import { ParamsNotFound } from "../errors/paramsNotFound";
import { IBaseService } from "../interfaces/service.interface";
import { BorrowedBook } from "../models/borrowedBook.model";

export class BorrowedBookController implements IBaseController {
    constructor(
        private readonly service: IBaseService<BorrowedBook, BorrowedBook>,
    ) {

    }

    async getAll(_: Request, response: Response): Promise<void> {
        try {
            const borrowedBooks = await this.service.getAll();

            response.status(200).json({borrowedBooks});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }

    async getOne(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const borrowedBook = await this.service.getOne(id);

            response.status(200).json({borrowedBook});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }

    async create(request: Request, response: Response): Promise<void> {
        try {
            const borrowedBook = request.body;
            const borrowedBookCreated = await this.service.create(borrowedBook!);

            response.status(201).json({borrowedBook: borrowedBookCreated});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }

    async update(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const borrowedBook = request.body;
            const borrowedBookUpdated = await this.service.update(id, borrowedBook!);

            response.status(201).json({borrowedBook: borrowedBookUpdated});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }

    async delete(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const borrowedBookDeleted = await this.service.delete(id);

            response.status(201).json({borrowedBook: borrowedBookDeleted});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }
}