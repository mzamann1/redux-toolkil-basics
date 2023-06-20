import React from "react";
import { useSelector } from "react-redux";

function CarValue() {
  const total = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return (
    <>
      <hr />
      <div className="car-value">Total Cost: ${total}</div>;
    </>
  );
}

export default CarValue;
