import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const changeQty = (id, qty) =>
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id: id,
        qty: qty,
      },
    });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        padding: 10,
        width: "20%",
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <b style={{ fontSize: 30, alignSelf: "center" }}>SubTotal: $ {total}</b>

      {cart.length > 0 ? (
        cart.map((item) => {
          return (
            <div
              key={item.title}
              style={{
                display: "flex",
                padding: 10,
                border: "1px solid grey",
                margin: 5,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: 70, objectFit: "cover" }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <span>{item.title}</span>
                  <b>$ {item.price}</b>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button onClick={() => changeQty(item.id, item.qty - 1)}>
                  -
                </button>
                <span>{item.qty}</span>
                <button onClick={() => changeQty(item.id, item.qty + 1)}>
                  +
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <span style={{ padding: 20, alignSelf: "center" }}>Cart is Empty</span>
      )}
    </div>
  );
};

export default Cart;
