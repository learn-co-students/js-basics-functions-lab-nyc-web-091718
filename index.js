// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  const hq = 42;
  return Math.abs(pickup - hq)
}

function distanceFromHqInFeet(pickup) {
   let blocks = distanceFromHqInBlocks(pickup)
   const feetPerBlock = 264;
   return blocks * feetPerBlock;
}

function distanceTravelledInFeet(beginning, destination) {
  const feetPerBlock = 264;
  return Math.abs(beginning - destination) * feetPerBlock
}

function calculatesFarePrice(start, destination) {
 // The first four hundred feet are free.
 // For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!).
 // Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
 // Finally, Scuber does not allow any rides over 2500 feet - the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
 let fare;
 let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return fare = 0;
  } else if (distance > 400 && distance < 2000) {
    return fare = (distance - 400) * .02;
  } else if (distance > 2000 && distance < 2500) {
    return fare = 25;
  } else {
    return 'cannot travel that far';
  }

}
