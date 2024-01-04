import './index.css'

const ScoreCard = props => {
  const {scoreDetails, playAgain} = props

  const onPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="bg-congtainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="img"
      />
      <p className="trophy">YOUR SCORE</p>
      <p className="score">{scoreDetails}</p>
      <button type="button" onClick={onPlayAgain} className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        <p className="text">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ScoreCard
