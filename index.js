function distanceFromHqInBlocks(someValue) {

  let headquarters = 42

  return Math.abs(headquarters - someValue)

}

function distanceFromHqInFeet(distance) {
  const headquarters = 11088;
  return Math.abs(headquarters - (distance * 264))

}

function distanceTravelledInFeet(start, destination) {

  let totalDistance = start - destination
  return Math.abs(totalDistance * 264)

}

function calculatesFarePrice(start, destination) {
  const distance = 264 * Math.abs(start - destination)
  if (distance < 400) {
   return 0
 } else if (distance < 2000) {
   return (distance - 400) * 0.02
 } else if (distance < 2500) {
   return 25
 } else {
   return 'cannot travel that far'
 }

}
