import React, { Component } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Body extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
    }
    _onChange = (event) => {
        this.props.onAnswerChanged(event.target.dataset.questionId, event.target.value);
    }

    render() {
        let allQuestions = '';
        if(this.props.q.length > 0){
            allQuestions = this.props.q[0].questions.map(question => (
            <div key={question.id} className="quiz">
                <h2 className="question">{question.quest}</h2>
                <ul className="answerOptions">
                    <li className="answerOption">
                        <input type="radio" name={question.id} id={question.answer1 + question.id} className="radioCustomButton" value={question.answer1} data-question-id={question.id} onChange={this._onChange} />
                        <label className="radioCustomLabel" htmlFor={question.answer1 + question.id}>{question.answer1}</label>
                    </li>
                    <li className="answerOption">
                        <input type="radio" name={question.id} id={question.answer2 + question.id} className="radioCustomButton" value={question.answer2} data-question-id={question.id} onChange={this._onChange} />
                        <label className="radioCustomLabel" htmlFor={question.answer2 + question.id}>{question.answer2}</label>
                    </li>
                    <li className="answerOption">
                        <input type="radio" name={question.id} id={question.answer3 + question.id} className="radioCustomButton" value={question.answer3} data-question-id={question.id} onChange={this._onChange} />
                        <label className="radioCustomLabel" htmlFor={question.answer3 + question.id}>{question.answer3}</label>
                    </li>
                    <li className="answerOption">
                        <input type="radio" name={question.id} id={question.answer4 + question.id} className="radioCustomButton" value={question.answer4} data-question-id={question.id} onChange={this._onChange} />
                        <label className="radioCustomLabel" htmlFor={question.answer4 + question.id}>{question.answer4}</label>
                    </li>
                </ul>
            </div>
        ))}
        return (
            <div>{allQuestions}</div>
        );
    }
}

export default Body;