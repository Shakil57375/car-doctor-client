/* eslint-disable react/prop-types */
const ServicesCard = ({ service }) => {
  console.log(service);
  const { img, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{title}</h2>
      </div>
      <div className="card-actions flex justify-between items-center px-12 pb-5">
        <p className="text-orange-700 text-base font-semibold">
          Price : $ {price}
        </p>
        <button className="btn btn-primary">Book Know</button>
      </div>
    </div>
  );
};

export default ServicesCard;
