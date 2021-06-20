import {createPlayer} from './createPlayer.js'

const DOM = {
    boardElement: document.querySelector('[data-type="board"'),
    cellElements: document.querySelectorAll('[data-type="cell"]'),
    PvP: document.querySelector('[data-pvp]'),
    PvA: document.querySelector('[data-pva]'),
    start: document.querySelector('[data-start]'),
    restart: document.querySelector(['[data-restart]']),
    player1: document.querySelector(['[data-player1]']),
    player2: document.querySelector(['[data-player2]']),
    sound: document.querySelector('[data-sound]')
}

const audio = () => {
    const audio = '/Ambient Meditation (128Kbps).mp3'
    audio.play 
    audio.loop
    console.log('Audio Clicked')
}
DOM.sound.addEventListener('click', audio)



const x_class = 'fas fa-times'
const o_class = 'far fa-circle'

let gameboard = () => {

    let state = {
        board: ['', '', '', '', '', '', '', '', ''],
        currentPlayer: '',
        turn: 0,
        score: {x: 0, o: 0},

        players: {
            player1: {
                name: 'Player',
                mark: '',
                moves_made: []
            },
            player2: {
                name: 'AI',
                mark: '',
                moves_made: []
            }
        },
    }


    const hoverMark = e => {
        const nextTurn = state.turn % 2 === 0 ? x_class : o_class
        e.target.classList.add(nextTurn.split(' ')[0], nextTurn.split(' ')[1])
    }

    const placeMark = e => {
        const index = [...DOM.boardElement.children].indexOf(e.target)
        state.board[index] = state.turn % 2 === 0 ? 'x' : 'o'
        
        // Update player's moves_made array with new move
        state.board[index] === 'x' ? state.players.player1.moves_made.push(index) : state.players.player2.moves_made.push(index)

        renderBoard()
        findWinner()
        state.turn++
    }

    const humanTurn = () => {

    }

    const ComputerTurn = () => {

    }

    const renderBoard = () => {
        DOM.boardElement.innerHTML = '' // empties the board element

        const createElement = (class1, mark) => {
            const element = document.createElement('div')
            element.classList.add(`${class1}`)
            element.setAttribute('data-type', 'cell')
            DOM.boardElement.appendChild(element)

            if (mark !== undefined) { // if board cell is not empty
                element.classList.add(`${mark === 'x' ? 'bg-x-svg' : 'bg-o-svg'}`, 'bg-no-repeat', 'bg-center', 'bg-48')
            }
            if (mark === undefined) { // if cell empty, add event listeners
                element.addEventListener('mouseover', hoverMark)
                element.addEventListener('click', placeMark)
            }
        }

        state.board.forEach(cell => {
            switch(cell){
                case '':
                    createElement('cell-hover-layer')
                    return
                case 'x':
                    createElement('flex-center', 'x')
                    return
                case 'o':
                    createElement('flex-center', 'o')
                    return
            }
        })

        DOM.cellElements = document.querySelectorAll('[data-type="cell"]')
    }

    const setPlayer = (type, name) => {

    }

    const findWinner = () => {
        const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        const players = Object.values(state.players)
        
        const checker = (arr1, arr2) => arr1.every(element => arr2.includes(element)) 

        players.forEach(player => {
            winningCombos.forEach(combo => {
                if (checker(combo, player.moves_made)){
                    alert(`${player.name} Won!`)
                }
            })
        })
    }

    const endGame = () => {

    }

    return {
        state, setPlayer, hoverMark, placeMark, renderBoard, findWinner, endGame, audio
    }
}




const startGame = () => {
    let game = gameboard()
    game.renderBoard()
    game.audio()
}

startGame()
