import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Example.css';
import '../App.css';

const Example = ({items, removeItemHandler, addItemHandler, dis}) => {
  return (
    <div>
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={700}>
        <button 
            className="add-item-button"
            onClick={ addItemHandler.bind(null, items) }
            disabled={ dis }>add</button>
        {items.map((item) => {
          return (
            <div key={item.name} className="todo-item" onClick={removeItemHandler.bind(null, item)}>
              {item.name}
            </div>
          );
        })}
      </ReactCSSTransitionGroup>
    </div>
  );
};

// Example.propTypes = {
//   items: React.PropTypes.array.isRequired,
//   removeItemHandler: React.PropTypes.func.isRequired
// };

export default Example;