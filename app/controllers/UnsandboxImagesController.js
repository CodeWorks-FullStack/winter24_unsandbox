import { AppState } from "../AppState.js";
import { unsandboxImagesService } from "../services/UnsandboxImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawUnsandboxImage() {
  const unsandboxImage = AppState.unsandboxImage
  // NOTE target the html body, change the background image styling
  // NOTE we have to create a string and interpolate inside of url() in order for css to apply this correctly
  // document.body.style.backgroundImage = `url(${unsandboxImage.largeImgUrl}), url(${unsandboxImage.imgUrl})`
  document.body.style.backgroundImage = `url(${unsandboxImage.imgUrl})`

  setHTML('imageInfo', unsandboxImage.InfoCardHTMLTemplate)
}

export class UnsandboxImagesController {
  constructor () {
    console.log('Unsandbox controller loaded');
    AppState.on('unsandboxImage', _drawUnsandboxImage)
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