import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@/models/User';

const UserReducerState: {
  isAuthenticated: boolean;
  access_token?: string;
  refresh_token?: string;
  auth_Id?: string;
  user?: User;
  expoPushtoken?: string;
} = { isAuthenticated: false };

const UserReducer = createSlice({
  name: 'userSlice',
  initialState: UserReducerState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        user: action.payload,
        // isAuthenticated: true,
      };
    },
    setIsAuthentication: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },

    clearUser: (state) => {
      return {
        ...state,
        user: undefined,
        access_token: undefined,
        auth_Id: undefined,
      };
    },
  },
});

export const { setIsAuthentication, clearUser, setUser } = UserReducer.actions;
export default UserReducer.reducer;
