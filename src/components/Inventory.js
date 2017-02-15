import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component{
  render(){
    return(
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        {/* Though we call loadSamples here, we must actually load it in the App component, because that's where our state lives */}
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
