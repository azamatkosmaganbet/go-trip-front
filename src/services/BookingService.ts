import $api from "@/features/http";
import { IBooking, IBookingPost } from "@/interfaces/IBooking";
import { AxiosResponse } from "axios";


export default class BookingService {
  static createBooking(data: IBookingPost): Promise<AxiosResponse<IBooking>> {
    return $api.post<IBooking>(`/create/booking`, data);
  }

  static getBooking (id: string) {
    return $api.get(`/booking/${id}`)
  }
}
