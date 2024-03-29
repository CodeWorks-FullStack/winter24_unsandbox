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
    console.log('sandbox controller loaded');
    // NOTE only after we log in
    AppState.on('account', this.getMyImages)
    AppState.on('myImages', _drawMyImages)
  }

  async createImage() {
    try {
      await sandboxImagesService.createImage()
      Pop.success(`${AppState.unsandboxImage.description} saved!`)
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

  async removeImage(imageId) {
    try {
      const wantsToDelete = await Pop.confirm('Are you sure you want to remove this image?')

      if (!wantsToDelete) {
        return
      }

      await sandboxImagesService.removeImage(imageId)

    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}