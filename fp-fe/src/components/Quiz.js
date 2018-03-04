import React,{ Component } from 'react';
import Question from '../components/question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import PropTypes from 'prop-types';


class Quiz extends Component {
    renderAnswerOptions = (key) => {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={this.props.answer}
                questionId={this.props.question}
                onAnswerSelected={this.props.onAnswerSelected}
            />
        );
    }
    render() {
        return (
            <div key={this.props.questionId} className="quiz">
                <QuestionCount counter={this.props.questionId} total={this.props.questionTotal}
                />
                <Question content={this.props.question} />
                <ul className="answerOptions">
                    {this.props.answerOptions.map(this.renderAnswerOptions)}
                </ul>
            </div>
        );
    }
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  }

export default Quiz;