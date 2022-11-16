import React, { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold">All Services </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <AllServicesCard
            key={service._id}
            service={service}
          ></AllServicesCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
