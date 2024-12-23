import { IUser } from "../models";
import { UserSchema } from "../schemas";
import { BaseService } from "./base.service";
import * as bcrypt from "bcrypt";

export class UserService extends BaseService<UserSchema, IUser> {
    constructor(model: typeof UserSchema) {
        super(model);
    }

    async create(data: Partial<IUser>): Promise<UserSchema> {
        try {
            const password = data.password!;
            const salt = bcrypt.genSaltSync(7);
            const cryptPassword = bcrypt.hashSync(password, salt);

            return await UserSchema.create({...data, password: cryptPassword});
        } catch(error: unknown) {
            throw new Error(`Error create service ${error}`);
        }
    }
}