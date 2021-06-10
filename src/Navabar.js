import React from 'react';

const Navbar =(props) =>{
return(
<div style={styles.nav}>
<div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/2121/2121815.svg" alt="cart-icon" />
        <span style={styles.cartCount}> {props.count} </span>
        {/* {console.log(props.count)} */}
      </div>

</div>
);
    
}
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#C0C0C0',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: '#FFB6C1',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };
  
  
  export default Navbar;

