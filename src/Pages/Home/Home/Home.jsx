import About from "../About/About";
import Banner from "../Banner/Banner";
import OfficeTIme from "../OfficeTime/OfficeTIme";
import Products from "../Products/Products";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <OfficeTIme></OfficeTIme>
            <Products></Products>
        </div>
    );
};

export default Home;