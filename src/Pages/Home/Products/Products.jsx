/* eslint-disable react/jsx-no-undef */
import porduct1 from "../../../assets/images/products/1.png";
import porduct2 from "../../../assets/images/products/2.png";
import porduct3 from "../../../assets/images/products/3.png";
import porduct4 from "../../../assets/images/products/4.png";
import porduct5 from "../../../assets/images/products/5.png";
import porduct6 from "../../../assets/images/products/6.png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Products = () => {
  return (
    <div>
      <div className="text-center space-y-3 mt-16">
        <h3 className="text-3xl text-orange-600 font-bold">Popular Products</h3>
        <h2 className="text-5xl font-bold">Browse Our Products</h2>
        <p className="text-base text-gray-600 mx-auto max-w-[800px]">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        <div className="card w-full h-[550px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 relative">
            <img src={porduct1} alt="Shoes" className="rounded-xl relative" />
          </figure>
          <div className="card-body items-center text-center space-y-2 absolute bottom-0 left-[70px]">
            <Rating style={{ maxWidth: 130 }} value={4} readOnly />
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-orange-700 text-base font-semibold">
              Price : $20.00
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 h-[550px] shadow-xl">
          <figure className="px-10 pt-10 relative">
            <img src={porduct2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center space-y-2 absolute bottom-0 left-[70px]">
            <Rating style={{ maxWidth: 130 }} value={5} readOnly />
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-orange-700 text-base font-semibold">
              Price : $20.00
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 h-[550px] shadow-xl">
          <figure className="px-10 pt-10 relative">
            <img src={porduct3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center space-y-2 absolute bottom-0 left-[70px]">
            <Rating style={{ maxWidth: 130 }} value={5} readOnly />
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-orange-700 text-base font-semibold">
              Price : $20.00
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 h-[550px] shadow-xl">
          <figure className="px-10 pt-10 relative">
            <img src={porduct4} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center space-y-2 absolute bottom-0 left-[70px]">
            <Rating style={{ maxWidth: 130 }} value={4} readOnly />
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-orange-700 text-base font-semibold">
              Price : $20.00
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 h-[550px] shadow-xl">
          <figure className="px-10 pt-10 relative">
            <img src={porduct5} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center space-y-2 absolute bottom-0 left-[70px]">
            <Rating style={{ maxWidth: 130 }} value={4} readOnly />
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-orange-700 text-base font-semibold">
              Price : $20.00
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-100 h-[550px] shadow-xl">
          <figure className="px-10 pt-10 relative">
            <img src={porduct6} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center space-y-2 absolute bottom-0 left-[70px]">
            <Rating style={{ maxWidth: 130 }} value={4} readOnly />
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-orange-700 text-base font-semibold">
              Price : $20.00
            </p>
          </div>
        </div>
      </div>
      <div className="w-full text-center my-20">
        <button className="outline outline-offset-2 outline-orange-600  text-orange-600 font-bold bg-transparent btn hover:bg-orange-600 hover:text-white">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
