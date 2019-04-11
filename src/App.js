import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './store/actions';

import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchData());
  }
  
  
  
  render() {
    return (
      <div className="App">
          {/* {this.props.data.map( ele => {
            return <p>{ele.title}</p>
          }
          )} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      data: state.data
  }
}


export default connect(mapStateToProps)(App);
