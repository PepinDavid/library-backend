import bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";
import { UserSchema } from '../schemas';
import { UnauthorizedError } from '../errors/unauthorizedError';


export class AuthService {
    private readonly jwtSecret: string;
    private readonly jwtExpiresIn: string;

    constructor(jwtSecret: string, jwtExpiresIn: string = '1h', private readonly model: typeof UserSchema) {
        this.jwtSecret = jwtSecret;
        this.jwtExpiresIn = jwtExpiresIn;
    }

    async login(email: string, password: string): Promise<string> {
        const user = await this.model.findOne({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedError('Invalid email or password');
        }

        const payload = { id: user.id, email: user.email, name: user.name, role: user.role };
    
        return jwt.sign(payload, this.jwtSecret, { expiresIn: this.jwtExpiresIn });
    }
}
