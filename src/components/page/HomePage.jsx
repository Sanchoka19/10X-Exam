import MainHeader from "../layout/MainHeader";
import Herro from "../section/homePage/Herro"
import Logo from "../section/homePage/Logo";
import Carousel from "../section/homePage/Carousel";
import Arrivals from "../section/homePage/Arrivals";
import Feature from "../section/homePage/Features";


const HomePage = () => {
    return (
        <div>
            <MainHeader />
            <Herro />
            <Logo />
            <Carousel />
            <Arrivals />
            <Feature />
        </div>
    )
}

export default HomePage;