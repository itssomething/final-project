import React, { Component } from 'react';
import Body from './Body';
import '../App.css';
import { CSSTransitionGroup } from 'react-transition-group'
 // ES6

class questionPage extends Component {
  state = {
    pages: [],
    questionNumber: 0,
    testResult: null,
    answers: {},
    value: '',
    finished: false
  }

  componentWillMount() {
    this.getQuestions();
  }

  getQuestions = _ => {
    fetch('http://localhost:3636/collections/' + this.props.params.id)
    .then(response => response.json())
    .then(response => this.setState(Object.assign({}, this.state, {pages: response.pages})))
    .catch(error=> console.log(error))
  }

  _onAnswerChanged = (questionId, answer) => {
    this.setState({
      answers: Object.assign({}, this.state.answers, { [questionId]: answer })
    })

    // {
    //   "1 " : "Answer D",
    //   "2 " : "Answer C"
    // }
  }

  _onNextPart = () => {
    if (this.state.pages.length - 1 > this.state.questionNumber) {
      this.setState({
        questionNumber: this.state.questionNumber + 1
      });
    }
    else {
      console.log('Test finished');
      this.setState({
        finished: true,
        questionNumber: 0
      })
      // send result to server
      // $.ajax({
      //   url: '', // url to post here
      //   type: post,
      //   data: this.state.answers
      // })
      //   .done(result => {
      //     this.setState({
      //       testResult: result // format result to get actual display
      //     })
      //   })
      //   .fail(err => console.error(err));
    }
  }
  _onPreviousPart = () => {
    if(this.state.questionNumber > 0) {
      this.setState({
        questionNumber: this.state.questionNumber -1
      });
    }
  }

  render() {
    // function _checkPrevious(){
    //   if(this.state.questionNumber === 0) {
    //     this.setState({
    //       value: true
    //     });
    //   }
    //   else 
    //     this.setState({
    //       value: false
    //     });
    // }

    const buttonDisabled = !this.state.finished ? this.state.questionNumber === 0 : this.state.questionNumber === 3 && this.state.finished;

    // const display = this.state.testResult
    //   ? <div>{this.state.testResult}</div>
    //   : <Body onAnswerChanged={this._onAnswerChanged} q={this.state.things.page[this.state.questionNumber].content} />

    const nextPartButtonText = this.state.pages.length - 1 > this.state.questionNumber
      ? "Next part"
      : "Get result";

    // const previousPartButtonText = this.state.questionNumber > 0
    //   ?
    //   :

    return (
      <div className="App">
        <div>
          <CSSTransitionGroup
            transitionName="example"
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <Body onAnswerChanged={this._onAnswerChanged} q={this.state.pages} />
          </CSSTransitionGroup>
        </div>

        <button disabled={buttonDisabled} onClick={this._onPreviousPart}>Previous part</button>
        <button onClick={this._onNextPart}>{nextPartButtonText}</button>
      </div>


    );
  }
}

export default questionPage;