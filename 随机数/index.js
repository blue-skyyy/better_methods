// [min, max]
function getCloseRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// [min, max)

function getLeftCloseRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// (min, max)

function getOpenRandom(min, max) {
  return Math.floor(Math.random() * (max - min - 1) + min + 1);
}
// (min, max]

function getRightCloseRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min + 1);
}
