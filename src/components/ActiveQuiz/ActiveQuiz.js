import React from 'react'
import styles from './ActiveQuiz.scss'
import AnswersList from './AnswersList/AnswersList'


const ActiveQuiz = props => (

  <div className={styles.container}>
      <p className={styles.question}>
          <span>
              <strong>{props.answerNumber}. </strong>
              {props.question}
          </span>
          <small>{props.answerNumber}/{props.quizLength}</small>
      </p>
      <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        state={props.state}
      />
  </div>
)


export default ActiveQuiz