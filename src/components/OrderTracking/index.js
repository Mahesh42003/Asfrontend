import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

const Tracking = () => {
    const [orders,setValue]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch("http://localhost:5000/products")
            const data=await response.json()
            setValue(data)
        }
        fetchData()
    },[]) 
    
  return (
    <>
     <nav>
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

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Buyer Name</th>
            <th>Address</th>
            <th>Status</th>
            <th>Order Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="6" align="center">
                No orders found
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>{order.buyerName}</td>
                <td>{order.deliveryAddress}</td>
                <td>{order.orderStatus}</td>
                <td>
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Tracking