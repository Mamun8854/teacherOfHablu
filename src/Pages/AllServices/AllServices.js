import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hook/useTitle";
import Loading from "../Loading/Loading";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const { loading } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  useTitle("All Service");

  useEffect(() => {
    fetch("https://assignment-11-server-rosy.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <h2 className="text-center font-bold text-3xl py-10 text-teal-600">
        All Services{" "}
      </h2>
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
