import React from 'react';

import './App.css';
import binarySearch from './binarySearch';
import linearSearch from './linearSearch';
import { arr } from './linearSearch';

const sortedArray = [...arr].sort((a, b) => a - b);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      dataSet: arr,
      sortedDataSet: sortedArray,
      linSearchResult: '',
      binSearchResult: ''
    };
  }

  submitHandler(e) {
    e.preventDefault();
    const num = parseInt(this.state.inputValue, 10);
    const linSearchResult = linearSearch(this.state.dataSet, num);
    const binSearchResult = binarySearch(this.state.sortedDataSet, num);
    this.setState({
      inputValue: '',
      linSearchResult,
      binSearchResult
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
        <h2>{ this.state.linSearchResult ? 'Linear Search Result:' : ''}</h2>
        <p>{this.state.linSearchResult}</p>
        <h2>{ this.state.binSearchResult ? 'Binary Search Result:' : ''}</h2>
        <p>{this.state.binSearchResult}</p>
      </div>
    );
  }

}

export default App;
