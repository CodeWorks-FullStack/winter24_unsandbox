import { AppState } from "../AppState.js";
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

  }
}

export const sandboxImagesService = new SandboxImagesService()