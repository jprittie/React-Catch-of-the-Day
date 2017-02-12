import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // This style of commenting can be used here
  render() {
    return (
      <form className="store-selector">
        { /* But here, JSX comment style is needed */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;
