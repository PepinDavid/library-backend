import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { EServicesName } from '../services';
import { AuthService } from '../services/auth.service';
import { createController, EControllerName } from '../controllers';

const authController = createController<AuthController, AuthService>(
    EControllerName.AuthController,
    EServicesName.AuthService,
)

const authRouter = Router();

authRouter.post('/login', authController.login.bind(authController));

export default authRouter;
