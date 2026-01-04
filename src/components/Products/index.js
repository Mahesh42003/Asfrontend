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

const Products = () => {
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
    <h1 className='title-page'>Simple Product Catalogue</h1>

    <ul className='unordered-list'>
     {
        list.map((each)=>{
            return(
            <div key={each.id} className='each-list-item'>
                <li>
                   <h3>Item Name:<span>{each.name}</span></h3>
                   <p>Price:<span>{each.price}/- {each.unit}</span></p>
                </li>
            </div>
            )
        })
     }
     </ul>
    </>
  )
}

export default Products