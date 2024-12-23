import { NextFunction, Response, Request } from "express";
import { ERole } from "../models";
import { ForbiddenError } from "../errors/forbiddenError";

export function authorizationRoleMiddleware(request: Request, _: Response, next: NextFunction): void {
    const {role} = (request as Request & { user?: { id: string; email: string, role: string } }).user!;

    if (role !== ERole.ADMIN) {
        throw new ForbiddenError('Not Authorized');
    }

    next();
}