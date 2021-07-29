import React,{Component} from 'react';
import './App.css';
import Burger from './Container/Burger';
import Layout from './Components/Layout/Layout'
import Checkout from './Container/Checkout';




class App extends Component{
    render(){
        return (
          <div>  
            <Layout></Layout>         
            <p>Burger App</p>
            <Burger></Burger>
            <Checkout> </Checkout>
          </div>
        );
    }
}

export default App;
