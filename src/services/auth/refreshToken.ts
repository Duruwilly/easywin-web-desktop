import axios from "axios";
import { BASE_URL } from "../../constants/base-urls";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../constants/app";
import { removeRefreshToken } from "../../helpers/authHelpers";

export const refreshAccessToken = async (payload: { refreshToken: string }) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/auth/refresh-auth-token`,
      payload
    );
    const dataResponse = response.data as any;
    localStorage.setItem(ACCESS_TOKEN_KEY, dataResponse.authorizationToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, dataResponse.refreshToken);
    return response.data;
  } catch (error) {
    // If refresh fails, log out user here
    removeRefreshToken();
    throw error;
  }
};
