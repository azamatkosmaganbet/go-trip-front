import { API_URL } from "@/constants/api";
import { ICity, ICityData } from "@/interfaces/ICity";
import { IGuide } from "@/interfaces/IGuide";
import { ITrip } from "@/interfaces/ITrip";
import { AuthResponse } from "@/interfaces/user/AuthResponse";
import { IUser } from "@/interfaces/user/IUser";
import AuthService from "@/services/AuthService";
import axios from "axios";
import { makeAutoObservable } from "mobx";
import { toast } from "react-toastify";

export default class Store {
  user = {} as IUser;
  guides = [] as IGuide[];
  guide = {} as IGuide;
  trips = [] as ITrip[];
  trip = {} as ITrip;
  cities = [] as ICity[];
  city = {} as ICityData;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setCities(cities: ICity[]) {
    this.cities = cities;
  }

  setCity(city: ICityData) {
    this.city = city;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setTrips(trips: ITrip[]) {
    this.trips = trips;
  }

  setTrip(trip: ITrip) {
    this.trip = trip;
  }

  setGuide(guide: IGuide) {
    this.guide = guide;
  }

  setGuides(guide: IGuide[]) {
    this.guides = guide;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(email: string, password: string, navigate: any) {
    this.setLoading(true);
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);

      toast.success("Вы успешно вошли в аккаунт");
      navigate("/");

      this.setLoading(true);
    } catch (e: any) {
      toast.error(e.response?.data?.message);
      this.setLoading(false);
    }
  }

  async registration(
    email: string,
    password: string,
    name: string,
    surname: string,
    phone: string
  ) {
    try {
      const response = await AuthService.registration(
        email,
        password,
        name,
        surname,
        phone
      );
      localStorage.setItem("token", response.data.accessToken);
      console.log(response);

      this.setAuth(true);
      this.setUser(response.data.user);

      toast.success("Вы успешно зарегистрировались!");
    } catch (e: any) {
      toast.error(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    try {
      this.setLoading(true);
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });

      localStorage.setItem("token", response.data.accessToken);
      console.log(response);
      console.log(this.isLoading);

      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async changeAvatar(id: string, avatarFile: File) {
    try {
      const formData = new FormData();
      formData.append("file", avatarFile);
      const response = await axios.put(`${API_URL}/update/${id}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Вы успешно изменили аватар !");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (e: any) {
      toast.error(e.response?.data?.message);
    }
  }
}


