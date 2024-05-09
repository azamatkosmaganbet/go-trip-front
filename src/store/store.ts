import { API_URL } from "@/constants/api";
import { IBooking, IBookingPost } from "@/interfaces/IBooking";
import { ICity, ICityData } from "@/interfaces/ICity";
import { IGuide } from "@/interfaces/IGuide";
import { ITrip } from "@/interfaces/ITrip";
import { AuthResponse } from "@/interfaces/user/AuthResponse";
import { IUser } from "@/interfaces/user/IUser";
import AuthService from "@/services/AuthService";
import BookingService from "@/services/BookingService";
import CityService from "@/services/CityService";
import GuideService from "@/services/GuideService";
import TripService from "@/services/TripService";
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
  bookings = [] as IBooking[];
  guidesCalendar = [] as IGuide[];
  modalFirst = false;
  modalSecond = true;

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

  setBooking (booking: IBooking[]) {
    this.bookings = booking
  }

  setCalendarGuides (guide: IGuide) {
    this.guidesCalendar.push(guide)
  }

  setCalendarGuidesDefault () {
    this.guidesCalendar = [];
  }

  setFirstModal (arg:boolean) {
    this.modalFirst = arg
  }

  setSecondModal (arg:boolean) {
    this.modalSecond = arg
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
    phone: string,
    navigate: any
  ) {
    try {
      const response = await AuthService.registration(
        email,
        password,
        name,
        surname,
        phone,
      );
      localStorage.setItem("token", response.data.accessToken);
      console.log(response);

      this.setAuth(true);
      this.setUser(response.data.user);
      navigate("/");
      toast.success("Вы успешно зарегистрировались!");
    } catch (e: any) {
      toast.error(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      console.log(response);
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
  
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e: any) {
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({} as IUser);
    } finally {
      this.setLoading(false);
    }
  }

  async changeAvatar(id: string, avatarFile: File) {
    try {
      const formData = new FormData();
      formData.append("file", avatarFile);
      await axios.put(`${API_URL}/update/${id}`, formData, {
        withCredentials: true, // если вам нужны куки при запросе
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

  // async getUsersByRole(role: string) {
  //   try {
  //     this.setLoading(true);
  //     const response = await UserService.fetchUsersByRole(role);

  //     this.setGuides(response.data);
  //   } catch (e: any) {
  //     toast.error("Ошибка при получении пользователей");
  //   } finally {
  //     this.setLoading(false);
  //   }
  // }

  async getGuideById(id: string) {
    try {
      this.setLoading(true);
      const response = await GuideService.fetchGuideById(id);

      this.setGuide(response.data);

      this.setCalendarGuides(response.data)
      this
    } catch (e: any) {
      toast.error("Ошибка при получении Гида");
    } finally {
      this.setLoading(false);
    }
  }

  async getGuides() {
    try {
      this.setLoading(true);
      const response = await GuideService.fetchGuides();

      this.setGuides(response.data);
    } catch (e: any) {
      toast.error("Ошибка при получении Гидов");
    } finally {
      this.setLoading(false);
    }
  }

  async getTripsByGuideId(guideId: string) {
    try {
      this.setLoading(true);
      const response = await TripService.fetchTripsByGuideId(guideId);

      this.setTrips(response.data);
    } catch (e: any) {
      toast.error("Ошибка при получении Трипа");
      this.setLoading(false);
    } finally {
      this.setLoading(false);
    }
  }

  async getTripById(id: string) {
    try {
      this.setLoading(true);
      const response = await TripService.fetchTripById(id);

      this.setTrip(response.data);
    } catch (e: any) {
      toast.error("Ошибка при получении Трипа");
      this.setLoading(false);
    } finally {
      this.setLoading(false);
    }
  }

  async createBooking(data: IBookingPost) {
    try {
      this.setLoading(true);
      await BookingService.createBooking(data);

      toast.success("Вы успешо забронировали тур");
    } catch (e: any) {
    } finally {
      this.setLoading(false);
    }
  }

  async getCities() {
    try {
      this.setLoading(true);
      const response = await CityService.fetchCities();

      this.setCities(response.data);
    } catch (e: any) {
      toast.error("Ошибка при получении Трипа");
      this.setLoading(false);
    } finally {
      this.setLoading(false);
    }
  }

  async getCitiesById(id: string) {
    try {
      this.setLoading(true);
      const response = await CityService.fetchCityById(id);

      this.setCity(response.data);
    } catch (e: any) {
      toast.error("Ошибка при получении Трипа");
      this.setLoading(false);
    } finally {
      this.setLoading(false);
    }
  }

  async createCity(name: string, imageFile: File) {
    try {
      this.setLoading(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", imageFile);

      const response = await axios.post(`${API_URL}/create/city`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Вы успешно создали город !");
      return response.data;
    } catch (error) {
      throw new Error("Failed to create city");
    } finally {
      this.setLoading(false);
    }
  }

  async createGuideRequest(data: any) {
    try {
      this.setLoading(true);

      const response = await axios.post(`${API_URL}/send-guide-request`, data, {
        withCredentials: true,
      });
      toast.success(
        "Вы успешно подали запрос ! Наши модераторы уже обрабатывают"
      );

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      return response.data;
    } catch (e) {
      toast.error("Что то пошло не так");
    } finally {
      this.setLoading(false);
    }
  }

  async updateUserStatus(id: string, status: string) {
    try {
      this.setLoading(true);
      await axios
        .put(`${API_URL}/update/guide-status/${id}`, { status: status })
        .then(() => {
          this.getGuides();
        });

      toast.success("Вы успешно обновили статус !");
    } catch (e: any) {
      toast.error("Ошибка при обнолвении статуса");
      this.setLoading(false);
    } finally {
      this.setLoading(false);
    }
  }

  async createTrip(data: any) {
    try {
      this.setLoading(true);
      console.log(data);

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("day", data.day);
      formData.append("city", data.city);
      formData.append("guideId", data.guide);
      formData.append("file", data.file);

      const response = await axios.post(`${API_URL}/create/trip`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Вы успешно создали трип!");

      return response.data;
    } catch (e) {
      toast.error("Что то пошло не так");
    } finally {
      this.setLoading(false);
    }
  }

  async createRoute(data: any) {
    try {
      this.setLoading(true);
      const response = await axios.post(`${API_URL}/create/route`, data)
      toast.success("Вы успешно создали маршрут!");
      
      return response.data;

      
    } catch (e: any) {
      toast.error("Что то пошло не так");
    } finally {
      this.setLoading(false);
    }
  }

  async createStop(data: any) {
    try {
      this.setLoading(true);
      console.log(data);

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("route", data.route);
      formData.append("file", data.image);

      const response = await axios.post(`${API_URL}/create/stop`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Вы успешно создали трип!");

      return response.data;
    } catch (e) {
      toast.error("Что то пошло не так");
    } finally {
      this.setLoading(false);
    }
  }

  async updateTripById(id: string, data: Partial<ITrip>) {
    try {
      this.setLoading(true);
      const response = await TripService.updateTripById(id, data);

      toast.success("Вы успешно обновили страницу");
      this.getTripById(id);
      return response.data;
    } catch (e: any) {
      toast.error("Что то пошло не так")
    } finally {
      this.setLoading(false);
    }
  }

  async getBookings() {
    try {
      this.setLoading(true);
      this.setCalendarGuidesDefault()
      const response = await BookingService.getBooking(this.user.id);
      this.setBooking(response.data);
      response.data.map((data:IBooking) =>{
        this.getGuideById(data.tour.guide)
      })
      
    } catch (e: any) {
      toast.error("Ошибка при получении Брони");
      this.setLoading(false);
    } finally {
      this.setLoading(false);
    }
  }

}


