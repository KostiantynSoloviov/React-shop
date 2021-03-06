import { BasketItem } from './BasketItem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, elem) => {
        return sum + elem.price * elem.quantity;
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                ))
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item">
                Общая стоимость: {totalPrice} грн
                <button className="secondary-content btn btn-offer">
                    Оформить заказ
                </button>
            </li>
            <i
                className="material-icons basket-close"
                onClick={handleBasketShow}
            >
                clear
            </i>
        </ul>
    );
}

export { BasketList };
