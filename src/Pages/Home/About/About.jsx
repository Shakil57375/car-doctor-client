import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full relative">
        <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl"
        />
        <img
          src={parts}
          className="w-1/2 rounded-lg shadow-2xl border-8 border-white absolute right-5 top-1/2"
        />
        </div>
        <div className="lg:w-1/2 w-full space-y-5">
            <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified and of experience in this field</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni nihil vel sed aliquam accusantium dolorum qui voluptas omnis enim?
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni nihil vel sed aliquam accusantium dolorum qui voluptas omnis enim?
          </p>
          <button className="btn btn-warning">Get more info...</button>
        </div>
      </div>
    </div>
  );
};

export default About;
