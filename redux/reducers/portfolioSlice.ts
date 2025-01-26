import { Pages, Locales } from '@/models/enums';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PortfolioState {
  locale: Locales;
  selectedPage: Pages;
};

const initialState: PortfolioState = {
  locale: Locales.English,
  selectedPage: Pages.Home,
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Locales>) => {
      state.locale = action.payload;
    },
    setSelectedPage: (state, action: PayloadAction<Pages>) => {
      state.selectedPage = action.payload;
    },
  },
});

export const { setLocale, setSelectedPage } = portfolioSlice.actions;

export default portfolioSlice.reducer;