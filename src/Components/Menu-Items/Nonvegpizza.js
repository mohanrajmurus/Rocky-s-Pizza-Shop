import React from 'react';
import {BiRupee} from 'react-icons/bi'
function Nonvegpizza(props) {
  const menu = props.menu
  return (
    <div className='food-menu-container'>
      {
        menu.map(items => {
          return(
                items.pizza.nonVeg.map((item,index)=>{
                  return(
                   <ul key={index}>
                    <li>
                      <img src={item.img} alt={item.title} className='food-image'/>
                      </li>
                    <li className='food-title'name={item.title}>{item.title}</li>
                    <li className='food-description'>{item.description}</li>
                    <li className='food-price' price={item.price}><BiRupee/>{item.price}</li>
                    <li><button className='cart-button' onClick={props.onClick}>Add Cart</button></li>
                   </ul>
                  )
                })
          )
        })
      }
    </div>
  )
}

export default Nonvegpizza