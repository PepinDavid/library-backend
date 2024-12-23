import { Router } from "express";
import { IBaseController } from "../interfaces/controller.interface";
import { ConstructorDTO } from "../models";
import { validationParamsMiddleware } from "../middlewares/validationParams.middleware";
import { validationDTOMiddleware } from "../middlewares/validationDTO.middleware";
import { authenticateTokenMiddleware } from "../middlewares/authenticateToken.middleware";
import { authorizationRoleMiddleware } from "../middlewares/authorizationRole.middleware";
import { authorRouter } from "./author.route";
import { bookRouter } from "./book.route";
import { borrowedBookRouter } from "./borrowedBoook.route";
import { genreRouter } from "./genre.route";
import { userRouter } from "./user.route";

const apiRouter = Router();

apiRouter.use('/authors', authenticateTokenMiddleware, authorRouter);
apiRouter.use('/books', authenticateTokenMiddleware, bookRouter);
apiRouter.use('/borrowedBooks', authenticateTokenMiddleware, borrowedBookRouter);
apiRouter.use('/genres', authenticateTokenMiddleware, genreRouter);
apiRouter.use('/users', authenticateTokenMiddleware, userRouter);

export function createCrudRoutes(
    controller: IBaseController,
    createdDto: ConstructorDTO,
    updateDto: ConstructorDTO ,
    addSpecificRoutes?: Function,
): Router {
    const router = Router();
    
    router.get(
        '',
        controller.getAll.bind(controller),
    );

    router.get(
        '/:id',
        validationParamsMiddleware,
        controller.getOne.bind(controller),
    );

    router.post(
        '',
        authorizationRoleMiddleware,
        validationDTOMiddleware(createdDto),
        controller.create.bind(controller),
    );

    router.put(
        '/:id',
        authorizationRoleMiddleware,
        validationParamsMiddleware,
        validationDTOMiddleware(updateDto),
        controller.update.bind(controller),
    );

    router.delete(
        '/:id',
        authorizationRoleMiddleware,
        validationParamsMiddleware,
        controller.delete.bind(controller),
    );
    
    if (addSpecificRoutes) {
        addSpecificRoutes(router, controller);
    }
    
    return router;
}

export { apiRouter };