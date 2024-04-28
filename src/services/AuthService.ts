import $api from "@/features/http";
import { AuthResponse } from "@/interfaces/user/AuthResponse";
import { AxiosResponse } from "axios";


export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>(
      "/login",
      { email, password },
      { withCredentials: true }
    );
  }

  static async registration(
    email: string,
    password: string,
    name: string,
    surname: string,
    phone: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/registration", {
      email,
      password,
      name,
      surname,
      phone,
    });
  }

  static async logout(): Promise<AxiosResponse<AuthResponse>> {
    return $api.post("/logout");
  }
}
