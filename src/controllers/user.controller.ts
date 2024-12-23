import { Request, Response } from "express";
import { IBaseController } from "../interfaces/controller.interface";
import { InternalServerError } from "../errors/internalServerError";
import { ParamsNotFound } from "../errors/paramsNotFound";
import { CreateUserDTO, UpdateUserDTO } from "../models/user.models";
import { ValidationError } from "../errors/validationError";
import { IBaseService } from "../interfaces/service.interface";

export class UserController implements IBaseController {
    constructor(
        private readonly service: IBaseService<CreateUserDTO, UpdateUserDTO>,
    ) {

    }

    async getAll(_: Request, response: Response): Promise<void> {
        try {
            const users = await this.service.getAll();

            response.status(200).json({users});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }

    async getOne(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const user = await this.service.getOne(id);

            response.status(200).json({user});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }

    async create(request: Request, response: Response): Promise<void> {
        try {
            const user = request.body as CreateUserDTO;
            const userCreated = await this.service.create(user);

            response.status(201).json({user: userCreated});
        } catch(error: unknown) {
            throw new ValidationError(`Error create user ${error}`);
        }
    }

    async update(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const user = request.body as UpdateUserDTO;
            const userUpdated = await this.service.update(id, user);

            response.status(201).json({user: userUpdated});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }

    async delete(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if (!id) throw new ParamsNotFound(`Params id not found`);

            const userDeleted = await this.service.delete(id);

            response.status(201).json({user: userDeleted});
        } catch(error: unknown) {
            throw new InternalServerError(`Àn error occurs: ${error}`)
        }
    }
}