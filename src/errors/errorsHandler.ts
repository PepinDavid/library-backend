import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

export function errorHandlerMiddleware(
    err: HttpError,
    _: Request,
    res: Response,
    __: NextFunction
  ): void {
    console.error(err.message);

    res.status(err.status || 500).json({
      status: err.status || 500,
      message: err.message || 'Internal Server Error',
    });
}