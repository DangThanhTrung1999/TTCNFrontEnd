import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder } from "../../actions/order.action";
function OrderDetail(props) {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order, error } = orderDetails || {};
  useEffect(() => {
    dispatch(detailsOrder(props.match.params.id));
  }, []);
  return (
    <>
      {order && (
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "40px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="profile-form" style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontWeight: "bold", paddingBottom: "5px" }}>
                    Address:
                  </h3>
                  <h3>
                    {order.shipping.street}, {order.shipping.district},
                    {order.shipping.city}
                  </h3>
                  <h3 style={{ fontWeight: "bold", paddingBottom: "5px" }}>
                    Phone:
                  </h3>
                  <h3>{order.shipping.phone}</h3>
                </div>
                <div className="profile-form" style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontWeight: "bold", paddingBottom: "5px" }}>
                    Payment method:
                  </h3>
                  <h3> {order.payment.payment}</h3>
                </div>
                <div className="profile-form" style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontWeight: "bold", paddingBottom: "5px" }}>
                    Your cart:
                  </h3>
                  <div>
                    {order.orderItems.length === 0 ? (
                      <div>Cart is empty</div>
                    ) : (
                      order.orderItems.map((item) => (
                        <div
                          key={item._id}
                          style={{
                            display: "flex",
                            backgroundColor: "white",
                            marginBottom: "15px",
                            padding: "15px 0",
                            borderBottom: "solid 1px #ccc",
                          }}
                        >
                          <div
                            className="cart-image"
                            style={{ width: "120px", paddingLeft: "20px" }}
                          >
                            <img
                              src={`/api/uploads/${item.image}`}
                              alt="product"
                              style={{ width: "100px" }}
                            />
                          </div>
                          <div
                            className="cart-name"
                            style={{ width: "40%", paddingLeft: "10px" }}
                          >
                            <Link
                              to={"/detail?id=" + item.product}
                              style={{ textDecoration: "none" }}
                            >
                              {item.name}
                            </Link>
                            <div>Quantity: {item.qty}</div>
                          </div>
                          <div className="cart-price">
                            {new Intl.NumberFormat().format(item.price)}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
              <div className="col-4 ">
                <form
                  className="profile-form"
                  style={{
                    backgroundColor: "white",
                    marginBottom: "15px",
                    padding: "15px 15px",
                    borderRadius: "5px",
                  }}
                >
                  <h3>
                    Total ( {order.orderItems.reduce((a, c) => a + c.qty, 0)}{" "}
                    items) : {"  "}
                    {new Intl.NumberFormat().format(
                      order.orderItems.reduce((a, c) => a + c.price * c.qty, 0)
                    )}
                  </h3>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default OrderDetail;
