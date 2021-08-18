import React, {Component} from 'react';
import Aux from '../../Hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BurgerController from '../../components/Burger/BurgerController/BurgerController'
import Modal from '../../components/UI/Model'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import BackDrop from '../../components/UI/BackDrop'

const INGREDIENT_PRICES = {
    salad:0.5,
    meat:0.2,
    cheese:0.5,
    bacon:1.2
}


class BurgerMenu extends Component {


    state = {
        ingredient: {
            salad:0,
            meat:0,
            cheese:0,
            bacon:0,
        },
        totalPrice:4,
        showCheckout:false,
        isPurchased:false
    }

    

    updateCheckoutStatusHandler =  (ingredientStatus) =>  {
        

        
        
        const sum = Object.keys(ingredientStatus)
                    .map(igKey => ingredientStatus[igKey])
                    .reduce((a, b) => a + b)
        
        this.setState({showCheckout:sum > 0})

    }
    
    addIngredientHandler = (type) => {
        let ingredientList = this.state.ingredient[type];
        
        const newData = ingredientList + 1
        const updatedIngredient = {
            ...this.state.ingredient
        }  
        updatedIngredient[type]= newData;
        const priceIngredient = INGREDIENT_PRICES[type]
        const newPrice = this.state.totalPrice + priceIngredient  
        this.setState({ingredient:updatedIngredient, totalPrice:newPrice})

        this.updateCheckoutStatusHandler(updatedIngredient)
       
    }

    purchaseModalHandler = () => {
        this.setState({isPurchased:true})
       
    }

    decreaseIngredientHandler= (type) => {
        const ingredientListDec = this.state.ingredient[type];
        
     
        if(ingredientListDec <= 0) {
          return ;   
        }
        const  newDataDec = ingredientListDec - 1 
        
        const updatedIngredientDec = {
            ...this.state.ingredient
        }
        updatedIngredientDec[type] = newDataDec
        const priceIngredientDec = INGREDIENT_PRICES[type]
        const newPriceDec = this.state.totalPrice - priceIngredientDec
        this.setState({ingredient:updatedIngredientDec, totalPrice:newPriceDec})
        this.updateCheckoutStatusHandler(updatedIngredientDec)
        
    }
    
    closeCheckoutMenu  = () => {
        this.setState({
            isPurchased:false
        })
    }

    purchaseBtnHandler = () => {
        alert("btnpressed")
    }
    render () {

        const disableInfo  = {
            ...this.state.ingredient
        }
        // console.log({...this.state.ingredient});
        for (let key in disableInfo){
            
            disableInfo[key] = disableInfo[key] <= 0
        }
        
        let burgerIngredientPass = null;

        if(this.state.ingredient) {
            burgerIngredientPass = <BurgerController 
            data={this.state.ingredient} 
            increase = {this.addIngredientHandler} 
            decrease = {this.decreaseIngredientHandler} 
            disableInfo = {disableInfo}
            price = {this.state.totalPrice}
            purchasable = {this.state.showCheckout}
            model = {this.state.ingredient}
            isPurchase = {this.purchaseModalHandler}
            isPurStatus = {this.state.isPurchased}

            />
        }
        

        return (
            <Aux >
                <BackDrop data ={this.state.isPurchased}/>
                
                <Modal data ={this.state.isPurchased}>
                    <OrderSummary price = {this.state.totalPrice} clicked = {this.purchaseBtnHandler} close= {this.closeCheckoutMenu} ingredient={this.state.ingredient} />
                </Modal>
                    <Burger ingredient = {this.state.ingredient}/>
                    {burgerIngredientPass}
                
            </Aux>

        )
    }
}


export default BurgerMenu;