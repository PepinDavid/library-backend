import { BookSchema } from "./book.schema";
import { AuthorSchema } from "./author.schema";
import { BorrowedBookSchema } from "./borrowedBook.schema";
import { GenreSchema } from "./genre.schema";
import { UserSchema } from "./user.schema";


export {
    BookSchema,
    AuthorSchema,
    BorrowedBookSchema,
    GenreSchema,
    UserSchema,
}

export const schemas = [
    BookSchema,
    AuthorSchema,
    BorrowedBookSchema,
    GenreSchema,
    UserSchema,
];