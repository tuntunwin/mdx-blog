"use client"
import React, { useState, useEffect } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = 'X'; // Human always plays as 'X'
    setBoard(newBoard);
    setIsXNext(false);
  };

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const minimax = (board: string[], depth: number, isMaximizing: boolean): number => {
    const winner = calculateWinner(board);
    if (winner === 'O') return 10 - depth; // Computer wins
    if (winner === 'X') return depth - 10; // Human wins
    if (board.every((square) => square !== null)) return 0; // Draw

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'O';
          const score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = 'X';
          const score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const computerMove = () => {
    let bestScore = -Infinity;
    let move = -1;

    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = 'O';
        const score = minimax(board, 0, false);
        board[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }

    if (move !== -1) {
      const newBoard = [...board];
      newBoard[move] = 'O';
      setBoard(newBoard);
      setIsXNext(true);
    }
  };

  useEffect(() => {
    if (!isXNext && !calculateWinner(board)) {
      const timer = setTimeout(() => computerMove(), 500); // Delay for a more natural feel
      return () => clearTimeout(timer);
    }
  }, [isXNext, board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner === 'X' ? 'Human' : 'Computer'}`
    : `Next player: ${isXNext ? 'Human (X)' : 'Computer (O)'}`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center bg-white dark:bg-black p-4 rounded-lg shadow-lg">
        <div className="text-lg font-bold mb-4">{status}</div>
        <div className="grid grid-cols-3 gap-2">
          {board.map((value, index) => (
            <button
              key={index}
              onClick={() => isXNext && handleClick(index)}
              className="w-20 h-20 bg-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 text-2xl font-bold flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700"
              disabled={!!value || !!winner || !isXNext}
            >
              {value}
            </button>
          ))}
        </div>
        <button
          onClick={resetGame}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
