import { Link } from "react-router-dom";
function Header({ onClickCart, cartItem }) {
  const totalPrice = cartItem.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <>
      <nav className="navbar">
        <ul className="leftNav">
          <Link to={"/home"}>
            <img
              className="logo"
              width={45}
              height={45}
              src="/img/logoStump.png"
              alt="logo"
            />
          </Link>
          <div className="leftnavLi">
            <li>React Pen V.2</li>
            <li>Shop of the best shoes</li>
          </div>
        </ul>
        <ul className="rightNav">
          <li>
            <img
              onClick={onClickCart}
              className="cartSvg"
              width={25}
              height={25}
              src="/img/cart.svg"
              alt="cart"
            />
          </li>
          <p>{totalPrice}$</p>
          <Link to="/fav">
            <li>
              <img width={25} height={25} src="/img/favourite.svg" alt="fav" />
            </li>
          </Link>
          <Link to={"/signup"}>
            {" "}
            <li>
              <button>Sign up</button>
            </li>
          </Link>

          <li>
            <button>Login</button>
          </li>
        </ul>
      </nav>
      <div className="Border"></div>
    </>
  );
}

export default Header;
