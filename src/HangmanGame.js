import React, { useState, useEffect } from 'react';

const HangmanGame = () => {
  const [word, setWord] = useState('');
  const [hiddenWord, setHiddenWord] = useState('');
  const [attempts, setAttempts] = useState(6);
  const [usedLetters, setUsedLetters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const fruitWords = [
    'apple',
    'banana',
    'orange',
    'mango',
    'strawberry',
    'grape',
    'kiwi',
    'pineapple',
    'watermelon',
    'pear',
  ];

  useEffect(() => {
    // Fetch a random fruit word
    fetchRandomWord();
  }, []);

  const fetchRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * fruitWords.length);
    const randomWord = fruitWords[randomIndex];

    setWord(randomWord);
    setHiddenWord('_'.repeat(randomWord.length));
  };

  const handleGuess = (letter) => {
    if (usedLetters.includes(letter)) {
      // Letter has already been guessed
      return;
    }

    const newUsedLetters = [...usedLetters, letter];
    setUsedLetters(newUsedLetters);

    if (word.includes(letter)) {
      // Update the hidden word with the correctly guessed letter
      const updatedHiddenWord = word
        .split('')
        .map((char, index) => (char === letter ? letter : hiddenWord[index]));
      setHiddenWord(updatedHiddenWord.join(''));

      if (!updatedHiddenWord.includes('_')) {
        // All letters have been guessed correctly
        setGameWon(true);
        setGameOver(true);
      }
    } else {
      // Incorrect guess
      setAttempts(attempts - 1);

      if (attempts - 1 === 0) {
        // No more attempts left, game over
        setGameOver(true);
      }
    }
  };

  const Head = () => (
    <circle cx="60" cy="30" r="10" />
  );

  const Body = () => (
    <line x1="60" y1="40" x2="60" y2="70" />
  );

  const LeftArm = () => (
    <line x1="50" y1="50" x2="60" y2="60" />
  );

  const RightArm = () => (
    <line x1="70" y1="50" x2="60" y2="60" />
  );

  const LeftLeg = () => (
    <line x1="50" y1="85" x2="60" y2="75" />
  );

  const RightLeg = () => (
    <line x1="70" y1="85" x2="60" y2="75" />
  );

  const HangmanFigure = () => {
    const incorrectGuesses = attempts > 0 ? 6 - attempts : 0;

    return (
      <svg width="120" height="120" style={{ marginBottom: '20px' }}>
        {incorrectGuesses >= 1 && <Head />}
        {incorrectGuesses >= 2 && <Body />}
        {incorrectGuesses >= 3 && <LeftArm />}
        {incorrectGuesses >= 4 && <RightArm />}
        {incorrectGuesses >= 5 && <LeftLeg />}
        {incorrectGuesses >= 6 && <RightLeg />}
      </svg>
    );
  };

  return (
    <div>
      <h1>Hangman Game</h1>
      <HangmanFigure />
      <p>Attempts left: {attempts}</p>
      <p>Used letters: {usedLetters.join(', ')}</p>
      <p>{hiddenWord}</p>
      {!gameOver && (
        <div>
          <p>Guess a letter:</p>
          <input type="text" onChange={(e) => handleGuess(e.target.value)} />
        </div>
      )}
      {gameOver && (
        <p>{gameWon ? 'You won!' : 'Game Over'}</p>
      )}
    </div>
  );
};

export default HangmanGame;
