import $api from "@/features/http";
import { ITrip } from "@/interfaces/ITrip";
import { AxiosResponse } from "axios";

export default class TripService {
  static fetchTripsByGuideId(id: string): Promise<AxiosResponse<ITrip[]>> {
    // Передача параметра role в запросе, если он предоставлен

    return $api.get<ITrip[]>(`/guide/trip/${id}`);
  }

  static fetchTripById(id: string): Promise<AxiosResponse<ITrip>> {
    return $api.get<ITrip>(`/trip/${id}`);
  }

  static updateTripById(id: string, data: Partial<ITrip>): Promise<AxiosResponse<ITrip>> {
    return $api.put<ITrip>(`/update/trip/${id}`, data);
  }
}
