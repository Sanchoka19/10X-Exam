import MainHeader from "../layout/MainHeader";
import Herro from "../section/homePage/Herro"
import Logo from "../section/homePage/Logo";
import Carousel from "../section/homePage/Carousel";
import Arrivals from "../section/homePage/Arrivals";
import Feature from "../section/homePage/Features";
import Subscribe from "../section/homePage/Subscribe";
import Footer from "../layout/MainFooter"

import { useState } from "react";
import BurgerMenu from "../common/BurgerMenu";

const HomePage = () => {
    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <div>
            <MainHeader
                onClickMenu={() => setBurgerActive(!burgerActive)}
            />
            {burgerActive && <BurgerMenu onClick={(() => setBurgerActive(false))} />}
            <Herro />
            <Logo />
            <Carousel />
            <Arrivals />
            <Feature />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default HomePage;