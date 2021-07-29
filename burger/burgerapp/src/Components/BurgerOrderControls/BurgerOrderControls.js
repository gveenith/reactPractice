import React from 'react'
import Burgerordercontrol from './BurgerOrderControl'
import  {BurgerIngredientLabel,BurgerLabel} from '../../utils/label'
import PropTypes from 'prop-types'

export const BurgerOrderControles = (props) => {


 const BurgerIngredientLabels =  Object.keys(BurgerIngredientLabel).map(i =>     
       <Burgerordercontrol key = {i} 
                           label = {i} 
                           add= {() => props.onAddclick(i)}
                           remove = {()=>props.onRemoveClick(i)}
                           >

       </Burgerordercontrol>
  )
    return (
        <div> 
            <p>Total Price: ${props.price}</p> 
            <label>{BurgerLabel.order}</label>          
            {BurgerIngredientLabels}
        </div>
    )
}

BurgerOrderControles.propTypes = {
    price: PropTypes.number,
    onAddclick: PropTypes.func,
    onRemoveClick: PropTypes.func
}

export default BurgerOrderControles

