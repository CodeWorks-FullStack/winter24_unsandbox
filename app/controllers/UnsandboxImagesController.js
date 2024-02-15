import { unsandboxImagesService } from "../services/UnsandboxImagesService.js";
import { Pop } from "../utils/Pop.js";

export class UnsandboxImagesController {
  constructor () {
    console.log('Unsandbox controller loaded');
    this.getRandomImage()
  }

  async getRandomImage() {
    try {
      await unsandboxImagesService.getRandomImage()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }
}