import { ITrip, ITripGuide } from "./ITrip";
import { IUser } from "./user/IUser";

export interface IBooking {
  adults: number;
  children: number
  date: string;
  city: string;
  name: string;
  phoneNumber: string;
  tour: ITripGuide;
  user: IUser;
  guide: string;
  start: Date
}
