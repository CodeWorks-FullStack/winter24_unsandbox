import { AppState } from "../AppState.js";
import { UnsandboxImage } from "../models/UnsandboxImage.js";
import { api } from "./AxiosService.js"

class SandboxImagesService {
  async createImage() {
    const image = AppState.unsandboxImage

    const response = await api.post('api/apods', image)
    console.log('📡 Created Picture', response.data);
  }

  async getMyImages() {
    const response = await api.get('api/apods')
    console.log('📡 Got my pictures', response.data);
    const newImages = response.data.map(imagePOJO => new UnsandboxImage(imagePOJO))
    AppState.myImages = newImages
    console.log(AppState.myImages);
  }
}

export const sandboxImagesService = new SandboxImagesService()