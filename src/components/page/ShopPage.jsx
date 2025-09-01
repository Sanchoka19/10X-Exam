import SecondaryHeader from "../layout/SecondaryHeader";
import Filter from "../section/shopPage/Filter";
import Feature from "../section/homePage/Features";
import Subscribe from "../section/homePage/Subscribe";
import Footer from "../layout/MainFooter";

const ShopPage = () => {
    return (
        <div>
            <SecondaryHeader />
            <Filter />
            <Feature />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default ShopPage;