import React from 'react';

const CartItem = (props) => {

   
       
        const{price,qty,title,img}=props.product;
        return(
        <div className='cart-item' style={{border:'1px solid'}}>
            <div className='left-block'>
            <img style = {styles.image} src={img} />
            </div>
            <div className='right-block'>
            <div style={{fontSize:30}}>{title}</div>
            <div style={{color: '#777'}}>$ {price}</div>
            <div style={{color:'#777'}}>Qty:{qty}</div>
            <div className='cart-item-actions'>
        {/*buttons*/}
        <img 
        alt='increase' 
        className='action-icons'
         src='https://image.flaticon.com/icons/png/128/271/271239.png' 
         onClick= {()=>{
             props.onIncClick(props.product)
         }}
         />
        <img 
        alt='decrease' 
        className='action-icons' 
        src='https://image.flaticon.com/icons/png/128/32/32195.png' 
        onClick= {()=>{
            props.onDecClick(props.product)
        }}
        />
        <img 
        alt='delete' 
        className='action-icons' 
        src='https://image.flaticon.com/icons/png/128/3031/3031157.png' 
        onClick= {()=>{
          props.onDelClick(props.product.id)
        }}
        />
</div>
</div>

        </div>
        ); 
    }

const styles = {
    image:{
        backgroundColor:'#C0C0C0',
        height:110,
        width:110,
        borderRadius:4,
    }
}
export default CartItem;