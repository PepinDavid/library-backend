import { createCrudRoutes } from ".";
import { createController, EControllerName } from "../controllers";
import { AuthorController } from "../controllers/author.controller";
import { CreateAuthorDTO, UpdateAuthorDTO } from "../models/author.models";
import { EServicesName } from "../services";
import { AuthorService } from "../services/author.service";

const authorController = createController<AuthorController, AuthorService>(
    EControllerName.AuthorController,
    EServicesName.AuthorService,
)

export const authorRouter = createCrudRoutes(authorController, CreateAuthorDTO, UpdateAuthorDTO);