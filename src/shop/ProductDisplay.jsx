import React, { useState } from 'react'
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
const desc = "Fashion fades, only style remains the same." 

const ProductDisplay = ({item}) => {
  // console.log(item)
  const {name, id, price, seller,ratingsCount,quantity,img}=item;
  const[prequantity, setQuantity]= useState(quantity);
  const[coupon,setCoupon]=useState("");
  const[size,setSize]=useState("Select Size");
  const[color,setColor]=useState("Select Color")

  const handleSizeChange = (e)=>{
    setSize(e.target.value);
  }

  const handleColorChange=(e)=>{
    setColor(e.target.value)
  }

  const handleDecrease=()=>{
    if(prequantity>1){
      setQuantity(prequantity-1)
    }

  }
  const handleIncrease =()=>{
  
      setQuantity(prequantity+1)
    
  }

 const handleSubmit=(e)=>{
  e.preventDefault();
  const product={
    id:id,
    img:img,
    name:name,
    price:price,
    quantity:prequantity,
    size:size,
    color:color,
    coupon:coupon
  }
  // console.log(product)

  // fetch cart data from local storage
  const existingCart=JSON.parse(localStorage.getItem("cart"))||[];
  const existingproductIndex= existingCart.findIndex((item)=>item.id===id);

  if(existingproductIndex !==-1){
    existingCart[existingproductIndex].quantity+=prequantity
  }else{
    existingCart.push(product);
  }
  // update local storage
  localStorage.setItem("cart",JSON.stringify(existingCart));

  // reset form fields
  setQuantity(1);
  setSize('Select Size');
  setColor("Select Color");
  setCoupon("");


 }

  return (
    <div>
      <div>
        <h4>
            {name}
        </h4>
        <p className='rating'>
          <Rating/>
          <span>{ratingsCount}review</span>
         </p>
         <h4>${price}</h4>
         <h6>{seller}</h6>
         <p>{desc}
         </p>
        </div>
        {/* Cart-component */}
        <div>
        <form onSubmit={handleSubmit}>
          {/* size */}
          <div className='select-product size'>
            <select value={size} onChange={handleSizeChange}>
              <option >Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className='icofont-rounded-down'></i>
          </div>
         {/* color */}
          <div className='select-product color'>
            <select value={color} onChange={handleColorChange}>
              <option >Select Color</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Pink">Pink</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
            </select>
            <i className='icofont-rounded-down'></i>
          </div>

          {/* cart plus minus */}
          <div className='cart-plus-minus '>
            <div className='dec qtybutton' onClick={handleDecrease}>-</div>
            <input className='cart-plus-minus-box' type="text" name="qtybutton" id="qtybutton" value={prequantity} onChange={(e)=>setQuantity(parseInt(e.target.value,10))}/>   
            <div className='inc qtybutton' onClick={handleIncrease}>+</div>
          </div>

          {/* coupon field */}
          <div className='discount-code mb-2'>
            <input type="text" placeholder='Enter Discount Code' onChange={(e)=>setCoupon(e.target.value)} />
          </div>

          {/* btn section */}
          <button type='submit' className='lab-btn'>
           Add to Cart
          </button>
          <Link to="/cart-page" className='lab-btn bg-primary'>
          <span>Check Out</span></Link>
        </form>
        </div>
    </div>
  )
}

export default ProductDisplay