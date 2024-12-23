import { createCrudRoutes } from ".";
import { createController, EControllerName } from "../controllers";
import { BookController } from "../controllers/book.controller";
import { CreateBookDTO, UpdateBookDTO } from "../models/book.models";
import { EServicesName } from "../services";
import { BookService } from "../services/book.service";

const bookController = createController<BookController, BookService>(
    EControllerName.BookController,
    EServicesName.BookService,
)

export const bookRouter = createCrudRoutes(bookController, CreateBookDTO, UpdateBookDTO);