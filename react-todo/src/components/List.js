import React,{ Component } from 'react';
import ReactDOM from 'react-dom'
import Item from './Item';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <h1>Todos</h1>
        <Item />
      </div>
    )
  }
}

export default List;
