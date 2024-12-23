import { Request, Response } from "express";
import { InternalServerError } from "../errors/internalServerError";
import { ParamsNotFound } from "../errors/paramsNotFound";
import { IBaseController } from "../interfaces/controller.interface";
import { CreateAuthorDTO, UpdateAuthorDTO } from "../models/author.models";
import { IBaseService } from "../interfaces/service.interface";

export class AuthorController implements IBaseController {
    constructor(
        private readonly service: IBaseService<CreateAuthorDTO, UpdateAuthorDTO>,
    ) {

    }
    
    async getAll(_: Request, response: Response): Promise<void> {
        try {
            const authors = await this.service.getAll();

            response.status(200).json({authors});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`);
        }
    }

    async getOne(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const author = await this.service.getOne(id);

            response.status(200).json({author});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`);
        }
    }

    async create(request: Request, response: Response): Promise<void> {
        try {
            const author = request.body as CreateAuthorDTO;
            const authorCreated = await this.service.create(author);

            response.status(201).json({author: authorCreated});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`);
        }
    }

    async update(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const author = request.body as UpdateAuthorDTO;
            const authorUpdated = await this.service.update(id, author);

            response.status(201).json({author: authorUpdated});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`);
        }
    }

    async delete(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const authorDeleted = await this.service.delete(id);

            response.status(201).json({author: authorDeleted});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`);
        }
    }
}
