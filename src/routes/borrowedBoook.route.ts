import { createCrudRoutes } from ".";
import { createController, EControllerName } from "../controllers";
import { BorrowedBookController } from "../controllers/borrowedBook.controller";
import { CreateBorrowedBookDTO, UpdateBorrowedBookDTO } from "../models/borrowedBook.model";
import { EServicesName } from "../services";
import { BorrowedBookService } from "../services/borrowedBook.service";

const borrowedBookController = createController<BorrowedBookController, BorrowedBookService>(
    EControllerName.AuthorController,
    EServicesName.AuthorService,
)

export const borrowedBookRouter = createCrudRoutes(borrowedBookController, CreateBorrowedBookDTO, UpdateBorrowedBookDTO);