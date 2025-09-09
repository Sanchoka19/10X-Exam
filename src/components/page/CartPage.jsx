import MainCartCard from "../common/MainCartCard";
import MainFooter from "../layout/MainFooter";
import SecondaryHeader from "../layout/SecondaryHeader";
import Subscribe from "../section/homePage/Subscribe";


const Cart = ({cart, updateQuantity}) => {

  return (
    <div>
      <SecondaryHeader />
      <MainCartCard
        cart={cart}
        updateQuantity={updateQuantity}
      />

      <Subscribe />
      <MainFooter />
    </div>
  );
}

export default Cart;
