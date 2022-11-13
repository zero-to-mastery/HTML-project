const game = () => {
  let playerScore = 0
  let computerScore = 0
  let choices = 0

  const playTheGame = () => {
    const rock = document.querySelector('.rock')
    const paper = document.querySelector('.paper')
    const scissors = document.querySelector('.scissors')
    const playerChoices = [rock, paper, scissors]
    const computerChoices = ['rock', 'paper', 'scissors']

    playerChoices.forEach(selection => {
      selection.addEventListener('click', function () {
        const choicesRemaining = document.querySelector('.choicesRemaining')
        choices++
        choicesRemaining.innerText = `Choices Remaining: ${15 - choices}`
        const choiceNumber = Math.floor(Math.random() * 3)
        const computerChoice = computerChoices[choiceNumber]

        winner(this.innerText, computerChoice)

        if (choices == 15) {
          gameOver(playerChoices, choicesRemaining)
        }
      })
    })
  }

  const winner = (player, computer) => {
    const result = document.querySelector('.result')
    const playerScoreboard = document.querySelector('.player-count')
    const computerScoreboard = document.querySelector('.computer-count')
    player = player.toLowerCase()
    computer = computer.toLowerCase()
    if (player === computer) {
      result.textContent = 'Tie'
    } else if (player == 'rock') {
      if (computer == 'paper') {
        result.textContent = 'Computer wins!'
        computerScore++
        computerScoreboard.textContent = computerScore
      } else {
        result.textContent = 'Player wins!'
        playerScore++
        playerScoreboard.textContent = playerScore
      }
    }
    else if (player == 'scissors') {
      if (computer == 'rock') {
        result.textContent = 'Computer wins!'
        computerScore++
        computerScoreboard.textContent = computerScore
      } else {
        result.textContent = 'Player wins!'
        playerScore++
        playerScoreboard.textContent = playerScore
      }
    }
    else if (player == 'paper') {
      if (computer == 'scissors') {
        result.textContent = 'Computer wins!'
        computerScore++
        computerScoreboard.textContent = computerScore
      } else {
        result.textContent = 'Player wins!'
        playerScore++
        playerScoreboard.textContent = playerScore
      }
    }
  }

  const gameOver = (playerChoices, choicesRemaining) => {
    const makeSelection = document.querySelector('.choice')
    const result = document.querySelector('.result')
    const reload = document.querySelector('.reload')

    playerChoices.forEach(selection => {
      selection.style.display = 'none'
    })

    makeSelection.innerText = 'Game Over!'
    choicesRemaining.style.display = 'none'

    if (playerScore > computerScore) {
      result.style.fontSize = '2rem'
      result.innerText = 'You Win!'
      result.style.color = '#308d46'
    } else if (playerScore < computerScore) {
      result.style.fontSize = '2rem'
      result.innerText = 'You lose!'
      result.style.color = '#f00'
    } else {
      result.style.fontSize = '2rem'
      result.innerText = 'Tied!'
      result.style.color = 'grey'
    }
    reload.innerText = 'Restart Game'
    reload.style.display = 'flex'
    reload.addEventListener('click', () => {
      window.location.reload()
    })
  }

  playTheGame()
}

game()