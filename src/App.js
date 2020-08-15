import React from 'react';
import data from "./data.json"
import { render } from '@testing-library/react';
import Products from './components/Products';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: data.products,
      size:"",
      sort:"",
    };
  }

  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">Shopping World</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>
          All rights reserved Titan Dynamix Pty Ltd @www.titandynamix.co.za/reserved
        </footer>
      </div>
    );
  }
 
}

export default App;
