import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "პროდუქტი 1", price: 20 },
    { id: 2, name: "პროდუქტი 2", price: 35 },
    { id: 3, name: "პროდუქტი 3", price: 50 },
  ];

  // პროდუქტის დამატება
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // პროდუქტის წაშლა
  const removeFromCart = (id) => {
    setCart(cart.filter((item, index) => index !== id));
  };

  // ჯამური ფასი
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>🛒 კალათა</h2>
      <h3>პროდუქტები</h3>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - {p.price} ₾
          <button onClick={() => addToCart(p)}>დამატება</button>
        </div>
      ))}

      <h3>ჩემი კალათა</h3>
      {cart.length === 0 ? (
        <p>კალათა ცარიელია</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            {item.name} - {item.price} ₾
            <button onClick={() => removeFromCart(index)}>წაშლა</button>
          </div>
        ))
      )}

      <h3>ჯამი: {total} ₾</h3>
    </div>
  );
}

export default Cart;
