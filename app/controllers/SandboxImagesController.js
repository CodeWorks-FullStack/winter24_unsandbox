import { AppState } from "../AppState.js";
import { sandboxImagesService } from "../services/SandboxImagesService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxImagesController {
  constructor () {
    console.log('sandbox controller loaded');
    // this.getMyImages()
    AppState.on('account', this.getMyImages)
  }

  async createImage() {
    try {
      await sandboxImagesService.createImage()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }

  async getMyImages() {
    try {
      await sandboxImagesService.getMyImages()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}