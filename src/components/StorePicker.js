import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  // In this example we are going to bind this in onSubmit instead
  // constructor(){
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }


  goToStore(event) {
    event.preventDefault();
    console.log("You changed the URL")
    // First, grab the text from the box
    // we can do this because of the ref
    console.log(this.storeInput.value);
    // Second, transition from "/" to "/store/:storeID"

  }



  // This style of commenting can be used here
  // wrt onSubmit, could also use onSubmit={this.goToStore.bind(this)}
  // if we had multiple StorePicker components on a page, and we used the approach below, we would be creating an individual function for every single component that gets rendered
  // if we use the constructor in that case, it's all referring to a single goToStore
  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        { /* But here, JSX comment style is needed */}
        <h2>Please Enter A Store</h2>
        { /* Ref - when the input is rendered, there will be a reference to the input on the class itself*/ }
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
