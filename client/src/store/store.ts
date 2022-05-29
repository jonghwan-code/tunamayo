import { configureStore } from "@reduxjs/toolkit";
import callGeoApiSlice from "../slices/callGeoApiSlice";
import currentLocationSlice from "../slices/currentLocationSlice";
import isLoginSlice from "../slices/isLoginSlice";
import locationAllowSlice from "../slices/locationAllowSlice";
import mapCenterSlice from "../slices/mapCenterSlice";
import modalSlice from "../slices/modalSlice";
import splashSlice from "../slices/splashSlice";

export const store = configureStore({
  reducer: {
    isLogin: isLoginSlice,
    splash: splashSlice,
    modal: modalSlice,
    callGeoApi: callGeoApiSlice,
    center: mapCenterSlice,
    locationAllow: locationAllowSlice,
    currentLocation: currentLocationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
