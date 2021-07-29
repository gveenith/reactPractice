import React from 'react'
import styles from './Ingredients.module.css'
import propType from 'prop-types'

const ingredients = (props) => {

    
    let ingredient = null;
    console.log (props.type)
    switch(props.type){
        case('bread-bottom'):
            ingredient = <div className= {styles.BreadBottom}></div>
        break;
        case('bread-top'):
            ingredient = (
            <div className = {styles.BreadTop}>
            <div className = {styles.Seeds1}></div>
            <div className = {styles.Seeds2}></div>
            </div>
            );
        break;
        case('Meat'):
            ingredient = <div className = {styles.Meat}></div>
        break;
        case('Cheese'):
            ingredient = <div className = {styles.Cheese}></div>
        break;
        case('Salad'):
            ingredient = <div className = {styles.Salad}></div>
        break;
        default:
            ingredient = null  
    }

    return ingredient
}

ingredients.propType = {
    type: propType.string.isRequired
}
export default ingredients