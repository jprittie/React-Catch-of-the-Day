import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  // we can't use this until super is called, because we have to initalize component first
  constructor(){
    super();
    // bind addFish method to app
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    // get initial state
    this.state = {
      // you could use an array for fishes instead of an object
      // it's empty to start with
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update our state
    const fishes = {...this.state.fishes}
    // add in our new fish
    // use timestamp as a key
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    // we have to explicitly tell React which state we would like to update
    // then React will find anywhere in the DOM we use that state and update it
    // Note: this is the same thing as this.setState({ fishes:fishes })
    this.setState({ fishes })
  }

  // just like addFish, we have to pass this down to Inventory component via props
  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }




  render() {

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className={"list-of-fishes"}>
            {
              Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} details={this.state.fishes[key]} />)
            }
          </ul>
        </div>
        <Order/>
        {/* We're passing addFish and loadSamples down to Inventory */}
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />

      </div>
    )
  }

}

export default App;
