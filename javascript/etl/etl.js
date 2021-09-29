export const transform = (oldSystem) => {
  let newSystem = {};
  for (const [score, letters] of Object.entries(oldSystem)) {
    for (const letter of letters) {
      newSystem[letter.toLowerCase()] = Number(score)
    }
  }
  return newSystem;
};
