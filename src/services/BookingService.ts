import $api from "@/features/http";
import { IBooking } from "@/interfaces/IBooking";
import { AxiosResponse } from "axios";


export default class BookingService {
  static createBooking(data: IBooking): Promise<AxiosResponse<IBooking>> {
    return $api.post<IBooking>(`/create/booking`, data);
  }

  static getBooking (id: string) {
    return $api.get(`/booking/${id}`)
  }
}
