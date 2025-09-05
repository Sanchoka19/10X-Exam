import SecondaryHeader from "../layout/SecondaryHeader";
import Filter from "../section/shopPage/Filter";
import Feature from "../section/homePage/Features";
import Subscribe from "../section/homePage/Subscribe";
import Footer from "../layout/MainFooter";
import { useState } from "react";

const ShopPage = () => {
    const [active, setActive] = useState(false);
    return (
        <div>
            <SecondaryHeader onClick={() => setActive(!active)} />
            <Filter fun={setActive} param={active} />
            <Feature />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default ShopPage;