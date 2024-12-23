import { GenreController } from "../controllers/genre.controller";
import { CreateGenreDTO, UpdateGenreDTO } from "../models/genre.models";
import { GenreService } from "../services/genre.service";
import { createController, EControllerName } from "../controllers";
import { EServicesName } from "../services";
import { createCrudRoutes } from ".";

const genreController = createController<GenreController, GenreService>(
    EControllerName.GenreController,
    EServicesName.GenreService,
);

export const genreRouter = createCrudRoutes(genreController, CreateGenreDTO, UpdateGenreDTO);
