import { AppState } from "../AppState.js";
import { UnsandboxImage } from "../models/UnsandboxImage.js";
import { api } from "./AxiosService.js"

class SandboxImagesService {
  async removeImage(imageId) {
    const response = await api.delete(`api/apods/${imageId}`)
    console.log('📡 Deleted image', response.data);

    // REVIEW if you want reactivity, it all happens after your network request

    const imageIndex = AppState.myImages.findIndex(image => image.id == imageId)

    if (imageIndex == -1) {
      throw new Error('findIndex is messed up bud')
    }

    AppState.myImages.splice(imageIndex, 1)
  }

  async createImage() {
    const image = AppState.unsandboxImage

    const response = await api.post('api/apods', image)
    console.log('📡 Created Picture', response.data);
    // REVIEW if you want reactivity, it all happens after your network request


    const newImage = new UnsandboxImage(response.data)

    AppState.myImages.push(newImage)
  }

  async getMyImages() {
    const response = await api.get('api/apods')
    console.log('📡 Got my pictures', response.data);
    const newImages = response.data.map(imagePOJO => new UnsandboxImage(imagePOJO))
    AppState.myImages = newImages
    console.log(AppState.myImages);
  }

  setActiveImage(imageId) {
    // NOTE no need to query the api, all of the data we need is stored locally
    const foundImage = AppState.myImages.find(image => image.id == imageId)
    AppState.unsandboxImage = foundImage
  }
}

export const sandboxImagesService = new SandboxImagesService()