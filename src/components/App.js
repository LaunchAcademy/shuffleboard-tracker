import React, { Component } from 'react'
import TeamScore from './TeamScore'

class App extends Component {
  constructor(props) {
    super(props)
    this.whenScoreUpdated = this.whenScoreUpdated.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.state = {}
  }

  componentWillMount(){
    this.resetGame()
  }

  resetGame(){
    this.setState({
      red: {
        score: 0,
        name: 'Red'
      },
      blue: {
        score: 0,
        name: 'Blue'
      }
    })
  }

  whenScoreUpdated(teamName, pointsToAdd) {
    for(let team in this.state) {
      const teamInfo = this.state[team]
      if(teamInfo.name === teamName){
        const newScore = teamInfo.score + pointsToAdd
        if(newScore >= 0) {
          this.setState({
            [team]: {
              score: teamInfo.score + pointsToAdd,
              name: teamInfo.name
            }
          })
        }
      }
    }
  }

  render(){
    return (
      <div>
        <button onClick={this.resetGame}>New Game</button>
        <TeamScore team={this.state.red} whenScoreUpdated={this.whenScoreUpdated} />
        <TeamScore team={this.state.blue} whenScoreUpdated={this.whenScoreUpdated} />
      </div>
    )
  }
}

export default App
