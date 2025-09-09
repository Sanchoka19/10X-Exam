import MainCartCard from "../common/MainCartCard";
import MainFooter from "../layout/MainFooter";
import SecondaryHeader from "../layout/SecondaryHeader";
import Subscribe from "../section/homePage/Subscribe";


const Cart = ({ cart, updateQuantity, removeFromCart, burgerActive, cartActive, setBurgerActive, setCartActive, setIsModalOpen, isModalOpen, clearCart}) => {


  return (
    <div>
      <SecondaryHeader
        onClickMenu={() => setBurgerActive(!burgerActive)}
        onClickHandbag={() => setCartActive(!cartActive)}
      />
      <MainCartCard
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        setShowBurger={setBurgerActive} showBurger={burgerActive}
        setShowCart={setCartActive} showCart={cartActive}
        setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}
        clearCart={clearCart}
      />

      <Subscribe />
      <MainFooter />
    </div>
  );
}

export default Cart;
