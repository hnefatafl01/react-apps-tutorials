import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" value="Add Todo"  />
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default Form;
