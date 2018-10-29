// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let blocks
  blocks = Math.abs(42-street)
  return blocks
}

function distanceFromHqInFeet(blocks) {
  let feet
  feet = distanceFromHqInBlocks(blocks)*264
  return feet
}

function distanceTravelledInFeet(start, end) {
  let feettravelled
  feettravelled = Math.abs(start - end)*264
  return feettravelled
}

function calculatesFarePrice(start, destination) {
  let fare
  let travelled = distanceTravelledInFeet(start, destination)
  switch (true) {
    case travelled <= 400:
      fare = 0
      break;
    case travelled <= 2000:
      fare = (travelled-400) * .02
      break;
    case travelled <= 2500:
      fare = 25
      break;
    default: fare = 'cannot travel that far'
  }
  return fare
}
