import { TLogin, TRegister, TRegisterOne } from "@/types/validations/auth";
import { useApi } from "../useApi";

export const useAuthServices = () => {
  const { request } = useApi();

  const getOtpLogin = async (payload: {
    phone_number: string;
  }): Promise<{ otp: string }> => {
    try {
      const response = await request("POST", { url: "/send-otp", payload });
      if (response.status === "success") {
        return response.data;
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      throw error;
    }
  };

  const loginWithOtp = async (payload: { otp: string }) => {
    try {
      const response = await request("POST", { url: "", payload });
      if (response.status === "success") {
        return response.data;
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      throw error;
    }
  };

  const authLogin = async (payload: TLogin) => {
    try {
      const response = await request("POST", { url: "/auth/login", payload });
      if (response.status === "success") {
        return response.data;
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      throw error;
    }
  };

  const authRegister = async (payload: TRegisterOne) => {
    try {
      const response = await request("POST", { url: "", payload });
      if (response.status !== "success") throw new Error(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const authFinalRegister = async (payload: TRegister) => {
    try {
      const response = await request("POST", { url: "", payload });
      if (response.status !== "success") throw new Error(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getOtpLogin,
    loginWithOtp,
    authLogin,
    authRegister,
    authFinalRegister,
  };
};
