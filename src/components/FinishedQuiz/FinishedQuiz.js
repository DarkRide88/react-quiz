import React from 'react'
import styles from './FinishedQuiz.scss'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {
  const succesCount = Object.keys(props.results).reduce((total, key) => {
    if(props.results[key] === 'success') {
      total++
    }
    return total
  },0)

  return (
    <div className={styles['finished-quiz']}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          console.log(props.results)
          const classes = [
            'fa ',
            props.results[quizItem.id] === 'wrong' ? 'fa-times ' : 'fa-check ',
            styles[props.results[quizItem.id]]
          ]
          return (
            <li key={index}>
              <strong>{index + 1}. </strong>
              {quizItem.question}
              <i className={classes.join('')}></i>
            </li>
          )
        })}
      </ul>
      <p>{succesCount} of {props.quiz.length}</p>
      
      <div>
        <Button onClick={props.onRetry} type="primary">Try again</Button>
        <Link to='/'>
          <Button type="success">Перейти в список тестов</Button>
        </Link>
        
      </div>
    </div>
  )
}

export default FinishedQuiz