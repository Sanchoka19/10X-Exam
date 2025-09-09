import SecondaryHeader from "../layout/SecondaryHeader";
import Filter from "../section/shopPage/Filter";
import Feature from "../section/homePage/Features";
import Subscribe from "../section/homePage/Subscribe";
import Footer from "../layout/MainFooter";

const ShopPage = ({ burgerActive, setBurgerActive, cartActive, setCartActive, addToCart, cart, updateQuantity, removeFromCart }) => {
    return (
        <div>
            <SecondaryHeader
                onClickMenu={() => setBurgerActive(!burgerActive)}
                onClickHandbag={() => setCartActive(!cartActive)}
            />
            <Filter
                setShowBurger={setBurgerActive} showBurger={burgerActive}
                setShowCart={setCartActive} showCart={cartActive}
                addToCart={addToCart}
                cart={cart}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
            />
            <Feature />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default ShopPage;