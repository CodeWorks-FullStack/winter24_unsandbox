import { unsandboxAPI } from "./AxiosService.js"

class UnsandboxImagesService {
  async getRandomImage() {
    const response = await unsandboxAPI.get('api/images/random')
    console.log('📡 got random image', response.data);
  }
}

export const unsandboxImagesService = new UnsandboxImagesService()