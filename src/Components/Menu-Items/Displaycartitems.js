import React from 'react'

function Displaycartitems(props) {
  console.log(props.totalAmount(props.cart));
    if(props.open){
        return (
            <div className='cart-display'>
              {!props.cart.length && <h4>No Items!!</h4>}
            {
              props.cart.map((item,index) => {
                return(
                  <ul key={index}>
                    <li className='item-list'>
                      <p className='item-name'>{item.title}</p>
                      <p className='item-quantity'>
                        <span className='decrease' onClick={props.onClickDecrease} itemindex={index}>-</span>
                        <span className='quantity'>{item.quantity}</span>
                        <span className='increase' onClick={props.onClickIncrease} itemindex={index} >+</span>
                      </p > 
                      <p className='item-price'>{item.netAmount}</p>                 
                    </li>
                  </ul>
                  
                )
              }
             
              )
            }
             {!props.cart.length && ''}
             <h3 className='total-amount'>Total Amount:{props.totalAmount(props.cart)}</h3>
             <button className='checkout'>Checkout</button>
          </div>
        )
    }
    else
        return null;
}

export default Displaycartitems;