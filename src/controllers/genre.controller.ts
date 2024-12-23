import { NextFunction, Request, Response } from "express";
import { IBaseController } from "../interfaces/controller.interface";
import { InternalServerError } from "../errors/internalServerError";
import { ParamsNotFound } from "../errors/paramsNotFound";
import { CreateGenreDTO, UpdateGenreDTO } from "../models/genre.models";
import { IBaseService } from "../interfaces/service.interface";

export class GenreController implements IBaseController {
    constructor(
        private readonly service: IBaseService<CreateGenreDTO, UpdateGenreDTO>,
    ) {

    }

    async getAll(_: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const genres = await this.service.getAll();

            response.status(200).json({genres});
        } catch(error: unknown) {
            next(new InternalServerError(`An error occurs: ${error}`));
        }
    }

    async getOne(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const genre = await this.service.getOne(id);

            response.status(200).json({genre});
        } catch(error: unknown) {
            next(new InternalServerError(`An error occurs: ${error}`));
        }
    }

    async create(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const genre = request.body as CreateGenreDTO;

            const genreCreated = await this.service.create(genre);

            response.status(201).json({genre: genreCreated});
        } catch(error: unknown) {
            next(new InternalServerError(`An error occurs: ${error}`));
        }
    }

    async update(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const genre = request.body as UpdateGenreDTO;
            const genreUpdated = await this.service.update(id, genre);

            response.status(201).json({genre: genreUpdated});
        } catch(error: unknown) {
            next(new InternalServerError(`An error occurs: ${error}`));
        }
    }

    async delete(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const genreDeleted = await this.service.delete(id);

            response.status(201).json({genre: genreDeleted});
        } catch(error: unknown) {
            next(new InternalServerError(`An error occurs: ${error}`));
        }
    }
}