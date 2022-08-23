import React,{useState,useEffect} from 'react';
import getMenu from '../menu';
import Navbar from './Navbar';
import Vegpizza from './Menu-Items/Vegpizza';
import Nonvegpizza from './Menu-Items/Nonvegpizza';
import Pasta from './Menu-Items/Pasta';
import Sides from './Menu-Items/Sides';
import Displaycartitems from './Menu-Items/Displaycartitems';
import '../CSS/menu.css';
import {BsCart4} from 'react-icons/bs'
function Menu() {
  const [type,setType] = useState(undefined);
  const [menu,setMenu]=useState(undefined);
  const [cart,setCart]=useState([]);
  const [count,setCount]=useState(0);
  const [display,setDisplay]=useState(false);
  useEffect(()=>{
    setMenu(getMenu())
  },[])
  const handleClick = (e) => {
    document.getElementById('veg').classList.remove('active');
    document.getElementById('non-veg').classList.remove('active');
    document.getElementById('pasta').classList.remove('active');
    document.getElementById('sides').classList.remove('active');
    e.target.classList.add('active');
    /* type = e.target.attributes.id.value; */
    setType(e.target.attributes.id.value);
    
  }
  const handleShowCartDisplay =() =>{
    setDisplay(!display);
  }
  const handleAddCart = (e) =>{
      const target= e.target;
      const child = target.parentElement.parentElement.children;
      const newCart ={
        title:child[1].attributes.name.value,
        quantity:1,
        price: Number(child[3].attributes.price.value),
        netAmount:Number(child[3].attributes.price.value)
      }
      setCart([...cart,newCart])
      setCount(count+1)
  }
  const handleIncrease =(e)=>{
    const index = e.target.attributes.itemindex.value;
    console.log(index);
    const newCart=[...cart];
    console.log(newCart[index]);
    newCart[index].quantity = cart[index].quantity+1;
    newCart[index].netAmount = cart[index].price*newCart[index].quantity;

    setCart(newCart)
  }
  const handleDecrease =(e)=>{
    const index = e.target.attributes.itemindex.value;
    const newCart=[...cart];
    if(newCart[index].quantity > 0){
      newCart[index].quantity = cart[index].quantity-1;
      newCart[index].netAmount = cart[index].price*newCart[index].quantity;

    
      setCart(newCart);
      console.log(cart[index].quantity);
      
    }
    
    if(newCart[index].quantity === 0){
      newCart.splice(index,1)
      setCart(newCart);
  }
  }
  const totalAmount=(cart)=>{
    let sum = 0;
    cart.forEach(ele => {
      sum += Number(ele.netAmount);
    })
    console.log(sum);
    return sum;
  }
  return (
    <div className='container'>
      <Navbar />
      <div className='food-menu-card'>
          <div className='food-menu-item-type'>
            <button className='food-item-type' onClick={handleClick} id='veg'>Veg Pizza</button>
            <button className='food-item-type' onClick={handleClick} id='non-veg'>Non-Veg Pizza</button>
            <button className='food-item-type' id='pasta' onClick={handleClick}>Pasta</button>
            <button className='food-item-type' id='sides' onClick={handleClick}>Sides</button>
          </div>
          <div>
            <button className='cart' onClick={handleShowCartDisplay}>{<BsCart4 />}Cart-{count}</button>
          </div>
         {/*  <div className='cart-display' id='display'>
            {
              cart.map((item,index) => {
                return(
                  <ul key={index}>
                    <li className='item-list'>
                      <p className='item-name'>{item.title}</p>
                      <p className='item-quantity'>
                        <span className='decrease' >-</span>
                        <span className='quantity'>{item.quantity}</span>
                        <span className='increase' >+</span>
                      </p > 
                      <p className='item-price'>{item.price}</p>                 
                    </li>
                  </ul>
                )
              })
            }
            
          </div> */}
          <Displaycartitems 
            cart={cart} 
            open={display}
            onClickIncrease={handleIncrease}
            onClickDecrease={handleDecrease}
            totalAmount={totalAmount}
          />
          <div className='food-menu-items'>
            {type==='veg'&& <Vegpizza 
                              menu={menu}
                              onClick={handleAddCart}
                              />
            }
            {type==='non-veg'&& <Nonvegpizza menu={menu} onClick={handleAddCart}/>}
            {type==='pasta'&& <Pasta menu={menu} onClick={handleAddCart}/>}
            {type==='sides'&& <Sides  menu={menu} onClick={handleAddCart}/>}
          </div>
      </div>
    </div>
  )
}

export default Menu