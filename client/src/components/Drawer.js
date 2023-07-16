function Drawer({ onCloseCart, cartItem, removeItemCart }) {
  return (
    <div className="overlay">
      <div className="Drawer">
        <div className="DrawerTop">
          <h3>Cart</h3>
          <button>
            <img
              onClick={onCloseCart}
              src="/img/btn-remove.svg"
              alt="remove"
              width={37}
              height={37}
            />
          </button>
        </div>
        <div className="CardsDrawer">
          {cartItem.map((obj, index) => (
            <div key={index} className="CardDrawer">
              <img
                className="DrawerCardImg"
                src={obj.imageUrl}
                width={113}
                height={92}
                alt="CardItem"
              />

              <div className="DrawerTitle">
                <p>{obj.title}</p>
                <p>{obj.price}</p>
              </div>
              <button>
                <img
                  onClick={() => removeItemCart(obj._id)}
                  width={37}
                  height={37}
                  src="/img/btn-remove.svg"
                  alt="btnRemove"
                />
              </button>
            </div>
          ))}
        </div>
        <div className="DrawerBottomBlock">
          <div className="DrawerBottom">
            <p>All Price:</p>
            <div className="DrawerBorder"></div>
            <p>21 498 руб. </p>
          </div>
          <div className="DrawerBottom">
            <p>Tax 5%:</p>
            <div className="DrawerBorder2"></div>
            <p>1074 руб. </p>
          </div>
          <button className="DrawerGreenButton">Confirm Order</button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
