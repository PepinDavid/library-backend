import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export function authenticateTokenMiddleware(req: Request & { user?: { id: string; email: string, role: string } }, res: Response, next: NextFunction): void {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        res.status(401).send({ message: 'Access token is missing or invalid' });
        return;
    }

    try {
        const decoded = jwt.verify(token, config.jwt.secret) as { id: string; email: string; role: string };

        req.user = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role,
        };
        
        next();
    } catch (error) {
        res.status(401).send({ message: 'Invalid token' });
    }
}
