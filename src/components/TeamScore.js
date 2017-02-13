import React, { Component } from 'react'

class TeamScore extends Component {
  constructor(props) {
    super(props)
    this.incrementScore = this.incrementScore.bind(this)
    this.decrementScore = this.decrementScore.bind(this)
  }
  incrementScore(){
    this.props.whenScoreUpdated(this.props.team.name, 1)
  }

  decrementScore(){
    this.props.whenScoreUpdated(this.props.team.name, -1)
  }
  render(){
    return (
      <div>
        <h3>{this.props.team.score}</h3>
        <h2>{this.props.team.name }</h2>
        <button onClick={this.incrementScore}>+</button>
        <button onClick={this.decrementScore}>-</button>
      </div>
    )
  }
}

export default TeamScore
