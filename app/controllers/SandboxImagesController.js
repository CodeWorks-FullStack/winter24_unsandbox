import { sandboxImagesService } from "../services/SandboxImagesService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxImagesController {
  constructor () {
    console.log('sandbox controller loaded');
  }

  async createImage() {
    try {
      await sandboxImagesService.createImage()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}