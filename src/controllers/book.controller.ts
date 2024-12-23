import { Request, Response } from "express";
import { IBaseController } from "../interfaces/controller.interface";
import { InternalServerError } from "../errors/internalServerError";
import { CreateBookDTO, UpdateBookDTO } from "../models/book.models";
import { ParamsNotFound } from "../errors/paramsNotFound";
import { IBaseService } from "../interfaces/service.interface";

export class BookController implements IBaseController {
    constructor(
        private readonly service: IBaseService<CreateBookDTO, UpdateBookDTO>,
    ) {

    }

    async getAll(_: Request, response: Response): Promise<void> {
        try {
            const books = await this.service.getAll();

            response.status(200).json({books});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }

    async getOne(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const book = await this.service.getOne(id);

            response.status(200).json({book});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }

    async create(request: Request, response: Response): Promise<void> {
        try {
            const book = request.body as CreateBookDTO;
            const bookCreated = await this.service.create(book);

            response.status(201).json({book: bookCreated});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }

    async update(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const book = request.body as UpdateBookDTO;
            const bookUpdated = await this.service.update(id, book);

            response.status(201).json({book: bookUpdated});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }

    async delete(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const bookDeleted = await this.service.delete(id);

            response.status(201).json({book: bookDeleted});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }
}