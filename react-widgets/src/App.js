import React, { Component } from 'react';
import './App.css';
import Example from './Example/Example';
import LoadingBar from './LoadingBar/LoadingBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [{ id: 1, name: 'A' }, { id: 2, name:'B' }, { id: 3, name:'C' }, { id: 4, name:'D' }],
        unusedItems: []
    }
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    var unshifted;
    if (this.state.unusedItems.length > 0) {
      unshifted = this.state.unusedItems.shift();
    } 
    if (this.state.items.length > 0) {
      this.state.items.unshift(unshifted);
    }
    this.setState({
      items: this.state.items,
      unusedItems: this.state.unusedItems
    })
  }                                                                                         

  removeItem(el) {
    let selected = this.state.items.indexOf(el);
    let removedItem = this.state.items.splice(selected, 1);
    this.state.unusedItems.push(removedItem[0]);
    this.setState({
      items: this.state.items,
      unusedItems: this.state.unusedItems
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Widgets with React</h1>
        </header>
        <Example
          className="widget-list-item"
          disabled={ this.state.unusedItems.length > 0 ? true : false }
          items={this.state.items}
          removeItemHandler={this.removeItem}
          addItemHandler={this.addItem} />
        <LoadingBar />
      </div>
    );
  }
}

export default App;
