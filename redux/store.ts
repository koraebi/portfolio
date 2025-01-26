import { configureStore } from '@reduxjs/toolkit';
import portfolioSliceReducer from '@/redux/reducers/portfolioSlice';
import { portfolioApi } from '@/redux/reducers/portfolioApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const makeStore = () => configureStore({
  reducer: {
    portfolio: portfolioSliceReducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(portfolioApi.middleware),
});

setupListeners(makeStore().dispatch);

export type RootState = ReturnType<AppStore['getState']>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];