export const createPlayer = (type, name) => {
    let player = { 
        type: type,
        name: name,
        score: 0,
        movesMade: [] }

    return {
        player,

        updateScore: () => player.score++,
        updateMoves: () => player.moves.push(move)
    }
}

