import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const carsList = useSelector((state) => state.cars.data);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderCarList = () => {
    return (
      <>
        {carsList.map((car) => {
          return (
            <div key={car.id} className="panel">
              <p>
                {car.name} - ${car.cost}
              </p>
              <button
                className="button is-danger"
                onClick={() => handleCarDelete(car)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </>
    );
  };
  return <div className="car-list">{renderCarList()}</div>;
}

export default CarList;
