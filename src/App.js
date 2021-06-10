
import Cart from './Cart';
import React from 'react';
import Navbar from './Navabar';
import firebase from 'firebase';
class App extends React.Component{
  constructor()
  {
      super();
      this.state={
          products: [],
          loading: true,
      }
      this.db=firebase.firestore();
  }
  componentDidMount(){
    // firebase.firestore()
    // .collection('products')
    // .get()
    // .then((snapshot) => {
    //   console.log(snapshot);
    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data());
    //   });
    //   const products=snapshot.docs.map((doc)=>{
    //     const data = doc.data();
    //     data["id"] = doc.id;
    //     return data;
    //   })
    //   this.setState({
    //     products:products,
    //     loading:false,
    //   })
    // })
    this.db
    .collection('products')
    .onSnapshot((snapshot)=>{
      
        //console.log(snapshot);
        // snapshot.docs.map((doc)=>{
        //   console.log(doc.data());
        // });
        const products=snapshot.docs.map((doc)=>{
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        })
        this.setState({
          products:products,
          loading:false,
        })
      
    })
  }
  HandleDeleteProduct = (id) =>{
      const {products} = this.state;
      // const items = products.filter((item) => item.id !== id);
      // console.log(items);
      // this.setState({
      //     products:items,
      // });
      const docRef=this.db.collection('products').doc(id);
      docRef
      .delete()
      .then(()=>{
        console.log('deleted successfully')
      })
      .catch((error)=>{
        console.log('error',error)
      })
  };
  HandleDecreaseqty = (product) =>{
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty > 0){
        const docRef=this.db.collection('products').doc(products[index].id);
        docRef
        .update({
          qty:products[index].qty-1
        })
        .then(()=>{
          console.log('updated successfully')
        })
        .catch((error)=>{
          console.log('error',error)
        })
      // products[index].qty -=1;
      // this.setState({ products: products})
      }
  }
  Handleincreaseqty = (product) => {
      const { products } = this.state;
      const index = products.indexOf(product);
      
      // products[index].qty+=1;
      // console.log(product.qty);
      // this.setState({ products:products})
      const docRef= this.db.collection('products').doc(products[index].id);
      docRef
      .update({
        qty:products[index].qty+1
      })
      .then(()=>{
        console.log('updated successfully')
      })
      .catch((error)=>{
        console.log('error',error)
      })
  }
  getCartcount=()=>{
    const { products } = this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }
  AddProduct=()=>{
    this.db
    .collection('products')
    .add({
      img:'',
      title:'washing machine',
      price:999,
      qty:2,
    })
    .then((docRef)=>{
      console.log('product added',docRef)
    })
    .catch((error)=>{
      console.log('error in adding product')
    })
  }
  getTotal=()=>{
    const { products } = this.state;
    let total=0;
    products.forEach((product)=>{
      total+=product.qty * product.price;
    })
    return total;
  }
  render(){  
      const {products,loading} = this.state; 
  return (
    <div className="App">
    <Navbar count={this.getCartcount()} />
    {/* <button onClick={this.AddProduct} style={{ padding:10 , fontSize:20 , borderRadius:50 , borderColor:'white' }}> Add a Product </button> */}
    <Cart
    products={products} 
    onIncClick={this.Handleincreaseqty}
    onDecClick={this.HandleDecreaseqty}
    onDelClick={this.HandleDeleteProduct}
    />
    {loading && <h1>Loading...</h1>}
    <div style={{fontSize:30, padding:10 ,fontWeight:'bolder'}}>Total:
      {this.getTotal()}
    </div>
    </div>
  );
}
}

export default App;
