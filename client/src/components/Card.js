function Card({
  _id,
  title,
  price,
  imageUrl,
  onPlus,
  onFav,
  isItemFav,
  isItemAdded,
}) {
  const onClickPlus = () => {
    onPlus({ _id, title, price, imageUrl });
  };
  const onClickFav = () => {
    onFav({ _id, title, price, imageUrl });
  };
  return (
    <div className="Cards">
      <div className="Card">
        <img
          className="CardImg"
          src={imageUrl}
          width={133}
          height={112}
          alt="CardItem"
        />
        <button className="favBtn">
          <img
            onClick={onClickFav}
            src={isItemFav(_id) ? "/img/heart-like.svg" : "/img/favourite.svg"}
            width={26}
            height={26}
            alt="FavBtn"
          />
        </button>
        <p className="CardTitle">{title}</p>
        <div className="CardBottom">
          <div className="CardBottomLeft">
            <p className="price">Price:</p>
            <p className="price2">{price}$</p>
          </div>
          <div className="CardBottomRight">
            <button onClick={onClickPlus}>
              <img
                src={
                  isItemAdded(_id)
                    ? "/img/btn-checked.svg"
                    : "/img/btn-plus.svg"
                }
                alt="BTNplus"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
