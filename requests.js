const getPuzzle = async () => {
  const wordCounter = Math.floor(Math.random() * 4) + 1;
  const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCounter}`);

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to get puzzle");
  }
}