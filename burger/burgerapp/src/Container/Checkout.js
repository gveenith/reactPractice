import React,{Component} from 'react'
import CheckoutSummary from '../Components/Checkout/CheckoutSummary'

class Checkout extends Component {
state = {
    ingredients: {
        Salad: 1,
        Cheese: 1,
        Meat: 1
    }
}
    render(){
        return(
        <CheckoutSummary ingredients = {this.state.ingredients}></CheckoutSummary>
        )
    }
} 

export default Checkout 