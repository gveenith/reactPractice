import React from 'react'
import Ingredients from './Ingredients'
import styles from './BurgerBuilder.module.css'

const Burgerbuilder = (props) => {

    let ingredient = Object.keys(props.ingredients)
                             .map(ikey => {  
                                 console.log(props.ingredients[ikey])                    
                                 return [...Array(props.ingredients[ikey])].map((x,i) => {
                                   return  <Ingredients type= {ikey} key= {ikey+i}></Ingredients>
                                 })
                             }).reduce((newIngredientsArray,ingredientsArray) => {
                                 return newIngredientsArray.concat(ingredientsArray)
                             },[]);
                             ingredient  = ingredient.length > 0 ? ingredient : <p>Please add ingredients</p>

                             

    return (
        <div className={styles.Burger}>
            <Ingredients type="bread-top"></Ingredients>
            {ingredient}
            <Ingredients type="bread-bottom"></Ingredients>          
        </div>
    )
}

export default Burgerbuilder