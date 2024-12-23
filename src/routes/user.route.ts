import { createCrudRoutes } from ".";
import { createController, EControllerName } from "../controllers";
import { UserController } from "../controllers/user.controller";
import { CreateUserDTO, UpdateUserDTO } from "../models/user.models";
import { EServicesName } from "../services";
import { UserService } from "../services/user.service";

const userController = createController<UserController, UserService>(
    EControllerName.UserController,
    EServicesName.UserService,
);

export const userRouter = createCrudRoutes(userController, CreateUserDTO, UpdateUserDTO);