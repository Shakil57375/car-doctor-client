import { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-nine-azure.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-3 mt-16">
        <h3 className="text-3xl text-orange-600 font-bold">Our Services</h3>
        <h2 className="text-5xl font-bold">Our Services Area</h2>
        <p className="text-base text-gray-600 mx-auto max-w-[800px]">
        the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. 
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {services.map((service) => (
          <ServicesCard service={service} key={service._id}></ServicesCard>
        ))}
      </div>
      <div className="w-full text-center my-20">
      <button className="outline outline-offset-2 outline-orange-600 bg-transparent text-orange-600 font-bold btn hover:bg-orange-600 hover:text-white">see more</button>
      </div>
    </div>
  );
};

export default Services;
