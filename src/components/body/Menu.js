import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'
import DishDetail from './DishDetail'

export class Menu extends Component {
  state = {
    dishes: DISHES,
    onDishSelected: null,
  }

  handleDishSelected = (dish) => {
    this.setState({
      onDishSelected: dish,
    });
    
  }

  render() {

    const menu = this.state.dishes.map((item) => {
      return (<MenuItem
        dish={item}
        key={item.id}
        onDishSelected={() => this.handleDishSelected(item)}
      />);
    });

    let dishDetail = null;
    if (this.state.onDishSelected != null) {
      dishDetail = <DishDetail dish={this.state.onDishSelected} />;
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            {menu}
          </div>
          <div className='col-6'>
            {dishDetail}
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
