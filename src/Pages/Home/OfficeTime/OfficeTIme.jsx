import { FaCalendarAlt, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
const OfficeTIme = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black px-16 py-16 text-white rounded-lg shadow-2xl mb-12">
      <div className="flex gap-5 items-center">
        <div>
          <FaCalendarAlt  className="w-10 h-10"/>
        </div>
        <div>
          <p className="font-semibold text-base">We are open monday-friday</p>
          <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <FaPhoneAlt  className="w-10 h-10"/>
        </div>
        <div>
          <p className="font-semibold text-base">Have a question?</p>
          <p className="font-bold text-2xl">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <FaLocationArrow  className="w-10 h-10"/>
        </div>
        <div>
          <p className="font-semibold text-base">Need a repair? our address</p>
          <p className="font-bold text-2xl">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default OfficeTIme;
