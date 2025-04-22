import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../models/App';

const initialState: AppState = {
  errors: [],
  successMessages: [],
};

const AppReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setErrors: (state, action: PayloadAction<string[]>) => {
      return { ...state, errors: action.payload };
    },

    clearErrors: (state) => {
      return { ...state, errors: [] };
    },
    setSuccessMessages(state, action: PayloadAction<string[]>) {
      state.successMessages = action.payload;
    },
    clearSuccessMessages(state) {
      state.successMessages = [];
    },
  },
});

export const {
  setErrors,
  clearErrors,
  setSuccessMessages,
  clearSuccessMessages,
} = AppReducer.actions;
export default AppReducer.reducer;
