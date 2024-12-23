import { NextFunction, Request, Response } from "express";

export interface IBaseController {
    getAll(request: Request, response: Response, next?: NextFunction): Promise<void>;
    getOne(request: Request, response: Response, next?: NextFunction): Promise<void>;
    create(request: Request, response: Response, next?: NextFunction): Promise<void>;
    update(request: Request, response: Response, next?: NextFunction): Promise<void>;
    delete(request: Request, response: Response, next?: NextFunction): Promise<void>;
}