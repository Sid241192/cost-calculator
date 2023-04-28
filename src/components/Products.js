import React from "react";

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((item, index) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 10,
              border: "1px solid grey",
              width: "30%",
              marginTop: 10,
              gap: 10,
            }}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ height: 200, objectFit: "cover" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{item.title}</span>
              <b>$ {item.price}</b>
            </div>
            {cart.some((p) => p.id === item.id) ? (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: "red",
                  color: "white",
                }}
                onClick={()=>dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: {
                      id: item.id
                    }
                })}
              >
                Remove From Cart
              </button>
            ) : (
              <button
                style={{
                  padding: 5,
                  border: 0,
                  borderRadius: 5,
                  backgroundColor: "green",
                  color: "white",
                }}
                onClick={()=>dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: item.id,
                      title: item.title,
                      thumbnail: item.thumbnail,
                      qty: 1,
                      price: item.price
                    }
                })}
              >
                Add To Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
