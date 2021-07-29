import React from 'react'
import Burgerbuilder from '../BurgerBuilder/BurgerBuilder'


const CheckoutSummary = (props) => {
    

    return(
        <div>
            <p>Checkout Summary</p>
            <div>
                <Burgerbuilder ingredients = {props.ingredients}></Burgerbuilder>
                <button>ORDER</button>
                <button>CANCEL</button>
            </div>
        </div>
    )
}

export default CheckoutSummary