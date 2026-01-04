import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    fetchOrders();
  }, []);
   
  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "Pending" ? "Delivered" : "Pending";

    await fetch(`http://localhost:5000/orders/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    fetchOrders();
  };

  return (
    <> <nav>
        <ul className='unordered-list-navbar'>
            <li className='navbar-list'>
                <Link to="/products" className='text-decoration-products'>Products</Link>
            </li>
            <li className='navbar-list'>
                <Link to="/orders" className='text-decoration-products'>Orders</Link>
            </li>
             <li className='navbar-list'>
                <Link to="/tracking" className='text-decoration-products'>Tracking</Link>
            </li>
             <li className='navbar-list'>
                <Link to="/admin" className='text-decoration-products'>Admin</Link>
            </li>
        </ul>
    </nav> 
     <div style={{ padding: "20px" }}>
      <h2>Orders List</h2>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Buyer</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>{order.buyerName}</td>
              <td>{order.deliveryAddress}</td>
              <td
                onClick={() => toggleStatus(order._id, order.orderStatus)}
                style={{
                  cursor: "pointer",
                  color: order.orderStatus === "Pending" ? "red" : "green",
                  fontWeight: "bold",
                }}
              >
                {order.orderStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
   
  );
};

export default OrdersTable;
