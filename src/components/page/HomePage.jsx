import MainHeader from "../layout/MainHeader";
import Herro from "../section/Herro";
import Logo from "../section/Logo";
import Carousel from "../section/Carousel";
import Arrivals from "../section/Arrivals";

const HomePage = () => {
    return (
        <div>
            <MainHeader />
            <Herro />
            <Logo />
            <Carousel />
            <Arrivals />
        </div>
    )
}

export default HomePage;