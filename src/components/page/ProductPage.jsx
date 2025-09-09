import SecondaryHeader from "../layout/SecondaryHeader";
import Feature from "../section/homePage/Features";
import Carousel from "../section/homePage/Carousel";
import Subscribe from "../section/homePage/Subscribe";
import Footer from "../layout/MainFooter";
import ProductDetails from "../section/productPage/ProductDetails";


const ProductPage = ({ burgerActive, setBurgerActive, cartActive, setCartActive, addToCart, cart, updateQuantity, removeFromCart }) => {

    return (
        <div>
            <SecondaryHeader
                onClickMenu={() => setBurgerActive(!burgerActive)}
                onClickHandbag={() => setCartActive(!cartActive)}
            />
            <ProductDetails
                setShowBurger={setBurgerActive} showBurger={burgerActive}
                setShowCart={setCartActive} showCart={cartActive}
                addToCart={addToCart}
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
            />
            <Feature />
            <Carousel />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default ProductPage;