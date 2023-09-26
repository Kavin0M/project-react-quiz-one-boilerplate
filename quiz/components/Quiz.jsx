import { Component } from 'react'

export class Quiz extends Component {
  render() {
    return (
      <div className='container2 flex'>
        <div className="head">Question</div>
        <div className="num">1 of 15</div>
        <div className="question">Which is the only mammal that can jump?</div>
        <div className="grid">
            <div className="option">Dog</div>
            <div className="option">Elephant</div>
            <div className="option">Goat</div>
            <div className="option">Lion</div>
        </div>
        <div className="buttons1 flex">
            <div className="button1 button">Previous</div>
            <div className="button2 button">Next</div>
            <div className="button3 button">Quit</div>
        </div>
      </div>
    )
  }
}

export default Quiz
