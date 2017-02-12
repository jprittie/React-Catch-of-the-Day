import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  goToStore(event) {
    event.preventDefault();
    console.log("You changed the URL")
    // First, grab the text from the box
    // Second, transition from "/" to "/store/:storeID"

  }



  // This style of commenting can be used here
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
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
