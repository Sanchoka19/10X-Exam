import SecondaryHeader from "../layout/SecondaryHeader";
import Feature from "../section/homePage/Features";
import Carousel from "../section/homePage/Carousel";
import Subscribe from "../section/homePage/Subscribe";
import Footer from "../layout/MainFooter";
import ProductDetails from "../section/productPage/ProductDetails";

import { useState } from "react";

const ProductPage = () => {
    const [burgerActive, setBurgerActive] = useState(false);
    const [cartActive, setCartActive] = useState(false);

    return (
        <div>
            <SecondaryHeader
                onClickMenu={() => setBurgerActive(!burgerActive)}
                onClickHandbag={() => setCartActive(!cartActive)}
            />
            <ProductDetails
                setShowBurger={setBurgerActive} showBurger={burgerActive}
                setShowCart={setCartActive} showCart={cartActive}
            />
            <Feature />
            <Carousel />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default ProductPage;