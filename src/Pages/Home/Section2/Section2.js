import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";
import Loading from "../../Loading/Loading";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Section2 = () => {
  const [services, setServices] = useState([]);
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://assignment-11-server-rosy.vercel.app/services?size=3")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-4xl font-bold text-center py-10 mb-10">
        here is some Course / Service of hablu's teacher{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/allservices">
          {" "}
          <button className="btn btn-outline">See All Services</button>
        </Link>
      </div>
    </div>
  );
};

export default Section2;
