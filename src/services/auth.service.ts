import { AxiosError } from "axios";
import { jwtVerify } from "jose";
import { viioApi, viioSecuredApi } from "../api/viioApi";
import { User } from "../interfaces";

export interface Response {
  token: string;
  user: User;
}

export class AuthService {
  static login = async (email: string, password: string): Promise<Response> => {
    try {
      const { data } = await viioApi.post<Response>("/login", {
        email,
        password,
      });
      // const key = import.meta.env.VITE_JWT_SECRET_KEY as string;
      const secretKey = new TextEncoder().encode(
        "mkA£JgNRHCKz?Z47dZ1iU7#$06=F-"
      );
      const jwt = new TextEncoder().encode(data.token);
      const decode = await jwtVerify(jwt, secretKey);
      const user = decode.payload as unknown as User;
      return {
        token: data.token,
        user,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }

      console.log(error);
      throw new Error("Unable to login");
    }
  };

  static signup = async (
    fistName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<Response> => {
    try {
      const { data } = await viioApi.post("/signup", {
        first_name: fistName,
        last_name: lastName,
        email,
        password,
      });

      // const key = import.meta.env.VITE_JWT_SECRET_KEY as string;
      const secretKey = new TextEncoder().encode(
        "mkA£JgNRHCKz?Z47dZ1iU7#$06=F-"
      );
      const jwt = new TextEncoder().encode(data.token);
      const decode = await jwtVerify(jwt, secretKey);
      const user = decode.payload as unknown as User;
      return {
        token: data.token,
        user,
      };
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        throw new Error(error.response?.data);
      }

      console.log(error);
      throw new Error("Unable to login");
    }
  };

  static checkStatus = async (): Promise<Response> => {
    try {
      const { data } = await viioSecuredApi.get<Response>("/auth/check-status");
      console.log("🚀 ~ AuthService ~ checkStatus= ~ data:", data);
      return data;
    } catch (error) {
      console.log("🚀 ~ AuthService ~ checkStatus= ~ error:", error);
      throw new Error("Unathorized");
    }
  };
}
