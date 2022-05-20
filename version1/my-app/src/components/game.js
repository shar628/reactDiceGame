import React, { Component } from 'react'
import "../style2.css"

export default class Game extends Component {
    state = { dice1: null, dice2: null, current: 0 }

    componentDidMount() {
        const random1 = Math.ceil(Math.random() * 6)
        const random2 = Math.ceil(Math.random() * 6)
        this.setState({ dice1: `dice${random1}`, dice2: `dice${random2}` })
    }
    onRollDiceClick = () => {
        const random1 = Math.ceil(Math.random() * 6)
        const random2 = Math.ceil(Math.random() * 6)
        this.setState({ dice1: `dice${random1}`, dice2: `dice${random2}` })
        this.setState({ current: random1 + random2 })
    }


    render() {
        return (
            <div className="container" >
                <Player name="player1" totalScore="100" currentScore={this.state.current} />
                <Controler diceA={this.state.dice1} diceB={this.state.dice2} onRollDiceClick={this.onRollDiceClick} />
                <Player name="player2" totalScore="200" currentScore={this.state.current} />
            </div>
        )
    }
}

function Player(props) {
    return (
        <div className="player">
            <h2 > {props.name}</h2>
            <h3> Total: {props.totalScore}</h3>
            <div> current: {props.currentScore}</div>
        </div >
    )
}

function Controler(props) {

    return (
        <div className="control">
            <button>new Game</button>
            <div className={`img1 ${props.diceA}`} ></div>
            <div className={`img1 ${props.diceB}`} ></div>
            <button onClick={props.onRollDiceClick}>roll the dice</button>
            <button>hold</button>
            <input type="text"></input>
        </div>
    )
}
