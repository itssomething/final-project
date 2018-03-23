import React, { Component } from 'react';
import './App.css';
import { pages } from './api/QuestionSource.json';
import Body from './component/Body';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import { Link } from 'react-router';
class App extends Component {
  state = {
    colList: []
  }

  componentDidMount() {
    this.getList();
  }

  getList = _ => {
    fetch('http://localhost:3636')
    .then(response => response.json())
    .then(response => this.setState({colList: response.colList}))
    .catch(error=> console.log(error))
  }

  renderCol = ({id, name, description}) => <div key = {id}><Link to={"collections/" + id}><h2>{name}</h2>{description}</Link></div>

  render() {
    const {colList} = this.state;
    return (
      <div className="App">
        {colList.map(this.renderCol)}

      </div>


    );
  }
}

export default App;
