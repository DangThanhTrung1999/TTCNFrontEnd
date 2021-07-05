import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listOrders, deleteOrder } from "../../actions/order.action";
function ListOrder(props) {
  const orderList = useSelector((state) => state.orderList);
  const { loading, orders, error } = orderList || {};

  const orderDelete = useSelector((state) => state.orderDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } =
    orderDelete || {};
  useEffect(() => {
    dispatch(listOrders());
  }, [successDelete]);
  const dispatch = useDispatch();
  const deleteHandler = (order) => {
    dispatch(deleteOrder(order._id));
  };
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div style={{ paddingTop: "40px" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "bold",
          paddingBottom: "15px",
        }}
      >
        Management Order
      </h2>
      <div className="order-table" style={{ padding: "0 10px" }}>
        <table className="table" style={{ fontSize: "18px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE ORDER</th>
              <th>TOTAL</th>
              <th>USER</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{new Intl.NumberFormat().format(order.itemsPrice)}</td>
                  <td>{order.user.fullName}</td>
                  <td>{order.isPaid.toString()}</td>
                  <td>{order.isDelivered.toString()}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      style={{
                        fontSize: "16px",
                        marginRight: "2px",
                      }}
                    >
                      <Link
                        to={"/order-detail/" + order._id}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Details
                      </Link>
                    </button>
                    <button
                      type="button"
                      style={{
                        fontSize: "16px",
                      }}
                      onClick={() => deleteHandler(order)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListOrder;
