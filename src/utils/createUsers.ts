import { ERole } from "../models";
import { UserSchema } from "../schemas";
import { EServicesName } from "../services";
import { ServiceFactory } from "../services/servicesFactory";
import { UserService } from "../services/user.service";

export async function createUsers() {
    const userService = ServiceFactory.createService<UserService>(
        EServicesName.UserService,
        UserSchema,
    );

    const admin = await userService.create({
        email: "admin@admin.com",
        name: "admin",
        password: "admin",
        role: ERole.ADMIN,
    });

    console.log(admin);

    const reader = await userService.create({
        email: "reader@reader.com",
        name: "reader",
        password: "reader",
        role: ERole.READER,
    });

    console.log(reader);
}