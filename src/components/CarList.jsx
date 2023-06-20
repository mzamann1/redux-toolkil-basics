import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderCarList = () => {
    return (
      <>
        {cars.map((car) => {
          const isBold =
            name && car.name.toLowerCase().includes(name.toLowerCase());
          return (
            <div key={car.id} className={`panel ${isBold && 'bold'}`}>
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
