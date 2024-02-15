import { AppState } from "../AppState.js";
import { UnsandboxImage } from "../models/UnsandboxImage.js";
import { unsandboxAPI } from "./AxiosService.js"



class UnsandboxImagesService {
  async getRandomImage() {
    const response = await unsandboxAPI.get('api/images/random')
    console.log('📡 got random image', response.data);
    // NOTE we get a single object here, not an array. No mapping!
    const newImage = new UnsandboxImage(response.data)
    console.log('new image', newImage);
    AppState.unsandboxImage = newImage
  }
}

export const unsandboxImagesService = new UnsandboxImagesService()