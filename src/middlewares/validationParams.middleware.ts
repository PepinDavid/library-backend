import { NextFunction, Request, Response } from "express";
import { ParamsNotFound } from "../errors/paramsNotFound";

export function validationParamsMiddleware(request: Request, _: Response, next: NextFunction): void {
    const {id} = request.params;

    if (!id || isNaN(parseInt(id))) throw new ParamsNotFound('Params id not found');

    next();
}
