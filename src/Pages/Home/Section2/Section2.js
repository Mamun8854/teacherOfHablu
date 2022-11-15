import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Section2 = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services?size=3")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="">
          {" "}
          <button className="btn btn-outline">See All Services</button>
        </Link>
      </div>
    </div>
  );
};

export default Section2;
