import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";

import {
  changeName,
  changeCost,
  resetCarForm,
  formReducer,
} from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export {
  store,
  changeName,
  changeCost,
  resetCarForm,
  addCar,
  removeCar,
  changeSearchTerm,
};
