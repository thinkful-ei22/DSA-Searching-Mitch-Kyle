import React from 'react';

import './App.css';
import linearSearch from './linearSearch';
import { arr } from './linearSearch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      dataSet: arr,
      searchResult: ''
    };
  }

  submitHandler(e) {
    e.preventDefault();
    const num = parseInt(this.state.inputValue, 10);
    const searchResult = linearSearch(this.state.dataSet, num);
    this.setState({
      inputValue: '',
      searchResult
    });
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  
  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => this.submitHandler(e)}>
          <label htmlFor='input'>input</label>
          <input type='text' id='input' value={this.state.inputValue} onChange={e => this.updateInputValue(e)} />
          <button>Run</button>
        </form>
        <p>{this.state.searchResult}</p>
          
      </div>
    );
  }

}

export default App;
