import { AppState } from "../AppState.js";
import { sandboxImagesService } from "../services/SandboxImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawMyImages() {
  const images = AppState.myImages
  let htmlString = ''
  images.forEach(image => htmlString += image.ListHTMLTemplate)
  setHTML('myImagesList', htmlString)
}


export class SandboxImagesController {
  constructor () {
    AppState.on('account', this.getMyImages)
    AppState.on('myImages', _drawMyImages)
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

  async getMyImages() {
    try {
      await sandboxImagesService.getMyImages()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }

  setActiveImage(imageId) {
    sandboxImagesService.setActiveImage(imageId)
  }
}