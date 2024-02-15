import { AppState } from "../AppState.js";
import { unsandboxImagesService } from "../services/UnsandboxImagesService.js";
import { Pop } from "../utils/Pop.js";

function _drawUnsandboxImage() {
  const unsandboxImage = AppState.unsandboxImage
  document.body.style.backgroundImage = `url(${unsandboxImage.imgUrl})`
}

export class UnsandboxImagesController {
  constructor () {
    console.log('Unsandbox controller loaded');
    this.getRandomImage()

    AppState.on('unsandboxImage', _drawUnsandboxImage)
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