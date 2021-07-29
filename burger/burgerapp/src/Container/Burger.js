import React,{Component}from 'react';
import Burgerbuilder from '../Components/BurgerBuilder/BurgerBuilder';
import BurgerOrderControles from '../Components/BurgerOrderControls/BurgerOrderControls';
import axios from '../axios-orders'


const INGREDIENTS_PRICE = {
        Meat: 2,
        Cheese: 1,
        Salad: 3
}

class Burger extends Component {

    state={
        ingredients: {
        Meat: 0,
        Cheese: 0,
        Salad: 0
        },
        totalprice: 0
    }

    AddIngredientsHandler  = (key) => {
        const updatedcounter = this.state.ingredients[key] + 1
        const price = this.state.totalprice;
        

        const newIng = {...this.state.ingredients}
        newIng[key] = updatedcounter

        const updatedPrice = price + INGREDIENTS_PRICE[key] 
        this.setState({ingredients:newIng, totalprice: updatedPrice })

    }
    RemoveIngredientsHandler = (key) => {
        if(this.state.ingredients[key] > 0){
        const updatedcounter = this.state.ingredients[key] - 1;
        const newIngredeints = {...this.state.ingredients}
        newIngredeints[key] = updatedcounter

        const price = this.state.totalprice
        const updatedprice = price - INGREDIENTS_PRICE[key]

        
        this.setState(({ingredients:newIngredeints,totalprice: updatedprice}))
        }
    }

    OrderHandler = () => {
        console.log("in")
        const orderDetails = {
            ingredients: this.state.ingredients,
            price: this.state.totalprice,
            custome: {
                name: 'V',
                address: {
                    street: '123 drive' ,
                    city: 'good',
                    state: 'vgood'
                }
            },
            delivery: 'asap'
        }
        axios.post('orders.json',orderDetails)
             .then(response => console.log(response))
             .catch(error => console.log(error))
    }

    render(){
        return(
            <div>
            <Burgerbuilder ingredients={this.state.ingredients}></Burgerbuilder>
            <BurgerOrderControles onAddclick = {this.AddIngredientsHandler} 
                                  onRemoveClick = {this.RemoveIngredientsHandler}
                                  price = {this.state.totalprice}></BurgerOrderControles>
            <button onClick = {this.OrderHandler}>Order Burger</button>
            </div>

        );
    }

}



export default Burger