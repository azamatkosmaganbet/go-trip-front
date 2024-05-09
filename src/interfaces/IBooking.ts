import { ITripGuide } from "./ITrip";
import { IUser } from "./user/IUser";

export interface IBooking {
  adults?: number;
  children?: number
  date: string;
  city: string;
  name: string;
  phoneNumber: string;
  tour: ITripGuide;
  user: IUser;
  guide: string;
  start?: Date
}

export interface IBookingPost {
  adults?: number;
  children?: number
  date: string;
  city: string;
  name: string;
  phoneNumber: string;
  tourId: string;
  userId: string;
  guideId: string;
  start?: Date
}
