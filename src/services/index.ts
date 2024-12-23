import { BookService } from "./book.service";
import { AuthorService } from "./author.service";
import { BorrowedBookService } from "./borrowedBook.service";
import { GenreService } from "./genre.service";
import { UserService } from "./user.service";
import { ServiceFactory } from "./servicesFactory";
import { AuthorSchema, BookSchema, BorrowedBookSchema, GenreSchema, UserSchema } from "../schemas";
import { ServiceInstanceRegistry } from "./servicesRegistry";
import { AuthService } from "./auth.service";
import { config } from "../config/config";

export type TServiceConstructor<TService, TArgs extends unknown[]> = new (...args: TArgs) => TService;

export enum EServicesName {
    AuthService = "AuthService",
    AuthorService = "AuthorService",
    BookService = "BookService",
    BorrowedBookService = "BorrowedBookService",
    GenreService = "GenreService",
    UserService = "UserService",
}

const jwtSecret = config.jwt.secret;
const jwtExpired = config.jwt.expiresIn;

registerServices();

export function registerServices() {
    ServiceFactory.registerService<AuthService, [string, string, typeof UserSchema]>(EServicesName.AuthService, AuthService);
    ServiceFactory.registerService<AuthorService, [typeof AuthorSchema]>(EServicesName.AuthorService, AuthorService);
    ServiceFactory.registerService<BookService, [typeof BookSchema]>(EServicesName.BookService, BookService);
    ServiceFactory.registerService<BorrowedBookService, [typeof BorrowedBookSchema]>(EServicesName.BorrowedBookService, BorrowedBookService);
    ServiceFactory.registerService<GenreService, [typeof GenreSchema]>(EServicesName.GenreService, GenreService);
    ServiceFactory.registerService<UserService, [typeof UserSchema]>(EServicesName.UserService, UserService);


    ServiceInstanceRegistry.setInstance(
        EServicesName.AuthorService,
        ServiceFactory.createService<AuthorService>(EServicesName.AuthorService, AuthorSchema),
    );
    ServiceInstanceRegistry.setInstance(
        EServicesName.BookService,
        ServiceFactory.createService<BookService>(EServicesName.BookService, BookSchema),
    );
    ServiceInstanceRegistry.setInstance(
        EServicesName.BorrowedBookService,
        ServiceFactory.createService<BorrowedBookService>(EServicesName.BorrowedBookService, BorrowedBookSchema),
    );
    ServiceInstanceRegistry.setInstance(
        EServicesName.GenreService,
        ServiceFactory.createService<GenreService>(EServicesName.GenreService, GenreSchema),
    );
    ServiceInstanceRegistry.setInstance(
        EServicesName.UserService,
        ServiceFactory.createService<UserService>(EServicesName.UserService, UserSchema),
    );

    ServiceInstanceRegistry.setInstance(EServicesName.AuthService, new AuthService(jwtSecret, jwtExpired, UserSchema));
}