import React from 'react'
import Question from  './Question'
import AnswerList from './AnswerList'
import FailPass from './failPass'
import UserGreeting from './UserGreeting'

function QuizArea(props) {
    if(props.isFinished){
        return (
        <div>
        <UserGreeting />
        <FailPass correct={props.correct} />
         </div>
         );
    }
    return (
        <div>
            <Question dataSet={props.dataSet} />
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
        </div>
    )
}

export default QuizArea;
