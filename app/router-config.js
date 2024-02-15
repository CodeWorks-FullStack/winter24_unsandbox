import { AccountController } from "./controllers/AccountController.js";
import { SandboxImagesController } from "./controllers/SandboxImagesController.js";
import { UnsandboxImagesController } from "./controllers/UnsandboxImagesController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [UnsandboxImagesController, SandboxImagesController],
    view: 'app/views/HomeView.html'
  },

  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




