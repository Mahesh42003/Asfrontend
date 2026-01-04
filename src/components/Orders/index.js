import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const list=[
  {
    "id": "v1",
    "name": "Organic Onion",
    "category": "Vegetable",
    "price": 40.00,
    "unit": "kg",
    "image": "https://example.com/images/onion.jpg"
  },
  {
    "id": "v2",
    "name": "Fresh Broccoli",
    "category": "Vegetable",
    "price": 45.00,
    "unit": "kg",
    "image": "https://example.com/images/broccoli.jpg"
  },
  {
    "id": "v3",
    "name": "Red Potato",
    "category": "Vegetable",
    "price": 30.00,
    "unit": "kg",
    "image": "https://example.com/images/potato.jpg"
  },
  {
    "id": "v4",
    "name": "Carrots (Bunch)",
    "category": "Vegetable",
    "price": 35.00,
    "unit": "kg",
    "image": "https://example.com/images/carrots.jpg"
  },
  {
    "id": "f1",
    "name": "Shimla Apple",
    "category": "Fruit",
    "price": 190.00,
    "unit": "kg",
    "image": "https://example.com/images/apple.jpg"
  },
  {
    "id": "f2",
    "name": "Banana (Robusta)",
    "category": "Fruit",
    "price": 38.00,
    "unit": "dozen",
    "image": "https://example.com/images/banana.jpg"
  },
  {
    "id": "f3",
    "name": "Green Grapes",
    "category": "Fruit",
    "price": 104.00,
    "unit": "kg",
    "image": "https://example.com/images/grapes.jpg"
  },
  {
    "id": "f4",
    "name": "Watermelon",
    "category": "Fruit",
    "price": 80.00,
    "unit": "piece",
    "image": "https://example.com/images/watermelon.jpg"
  }
] 

const Orders = () => {
    const [item,selectedItem]=useState("Organic Onion") 
    const [address,setAdress]=useState("")
    const [quantity,setQuantity]=useState("")
    const [name,setName]=useState("")
   const submittingForm = async (e) => {
  e.preventDefault()
  try {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item, address, quantity, name })
    })

    if (!res.ok) throw new Error("Failed to submit")

    alert("Order placed successfully!")
    setAdress("")
    setQuantity("")
    setName("")
  } catch (err) {
    alert(err.message)
  }
}


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
    <form className='styling-of-inputs' onSubmit={submittingForm}>
        <label htmlFor='list-of-items'>Vegetable Name / Fruit Name</label>
        <select id='list-of-items' onChange={(e)=>{selectedItem(e.target.value)}}>
            {
                list.map((each)=><option key={each.id} value={each.name}>{each.name}</option>)
            }
        </select> 
        <label htmlFor='quantity'>Quantity</label>
        <input type="text" id="quantity" required onChange={(e)=>{setQuantity(e.target.value)}} value={quantity}/>
        <label htmlFor='buyer-name'>Buyer Name</label> 
        <input type='text' id='buyer-name' required onChange={(e)=>{setName(e.target.value)}} value={name}/>
        <label htmlFor='address'>Delivery Address</label>
        <textarea rows={16} cols={16} onChange={(e)=>{setAdress(e.target.value)}} id='address' required value={address}>
            {address}
        </textarea>
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Orders