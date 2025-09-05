import SecondaryHeader from "../layout/SecondaryHeader";
import Feature from "../section/homePage/Features";
import Carousel from "../section/homePage/Carousel";
import Subscribe from "../section/homePage/Subscribe";
import Footer from "../layout/MainFooter";
import ProductDetails from "../section/productPage/ProductDetails";

import { useState } from "react";

const ProductPage = () => {
    const [active, setActive] = useState(false);

    return (
        <div>
            <SecondaryHeader onClick={() => setActive(!active)} />
            <ProductDetails fun={setActive} param={active} />
            <Feature />
            <Carousel />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default ProductPage;