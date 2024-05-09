import $api from "@/features/http";
import { IGuide } from "@/interfaces/IGuide";
import { AxiosResponse } from "axios";


export default class GuideService {
  static fetchGuides(): Promise<AxiosResponse<IGuide[]>> {
    return $api.get<IGuide[]>("/guides");
  }

  static fetchGuideById(id: string): Promise<AxiosResponse<IGuide>> {
    // Передача параметра role в запросе, если он предоставлен

    return $api.get<IGuide>(`/guide/${id}`);
  }

  
}
