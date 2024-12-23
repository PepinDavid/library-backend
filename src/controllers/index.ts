import { AuthService } from "../services/auth.service";
import { AuthorService } from "../services/author.service";
import { BookService } from "../services/book.service";
import { BorrowedBookService } from "../services/borrowedBook.service";
import { GenreService } from "../services/genre.service";
import { ServiceInstanceRegistry } from "../services/servicesRegistry";
import { UserService } from "../services/user.service";
import { AuthController } from "./auth.controller";
import { AuthorController } from "./author.controller";
import { BookController } from "./book.controller";
import { BorrowedBookController } from "./borrowedBook.controller";
import { ControllerFactory } from "./controllerFactory";
import { GenreController } from "./genre.controller";
import { UserController } from "./user.controller";

export enum EControllerName {
    AuthController = "AuthController",
    AuthorController = "AuthorController",
    BookController = "BookController",
    BorrowedBookController = "BorrowedBookController",
    GenreController = "GenreController",
    UserController = "UserController",
}

export type TControllerConstructor<TController, TArgs extends unknown[]> = new (...args: TArgs) => TController;

registerController();

export function registerController(): void {
    ControllerFactory.register<AuthController, [AuthService]>(EControllerName.AuthController, AuthController);
    ControllerFactory.register<AuthorController, [AuthorService]>(EControllerName.AuthorController, AuthorController);
    ControllerFactory.register<BookController, [BookService]>(EControllerName.BookController, BookController);
    ControllerFactory.register<BorrowedBookController, [BorrowedBookService]>(EControllerName.BorrowedBookController, BorrowedBookController);
    ControllerFactory.register<GenreController, [GenreService]>(EControllerName.GenreController, GenreController);
    ControllerFactory.register<UserController, [UserService]>(EControllerName.UserController, UserController);
}

export function createController<TController, TService>(
    controllerName: string,
    serviceName: string,
): TController {
    return ControllerFactory.createController<TController>(
        controllerName,
        ServiceInstanceRegistry.getInstance<TService>(serviceName),
    );
}