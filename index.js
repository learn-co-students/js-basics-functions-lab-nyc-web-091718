// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  //returns the number of blocks given a value

return Math.abs(42-street)

}


function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
//   if (start > end) {
//   return (start - end) * 264
// }  else
// return (end - start) * 264

  return Math.abs(start - end) * 264

}

function calculatesFarePrice(start, end) {
  let num_feet = distanceTravelledInFeet(start, end)
  if (num_feet <= 400) {
    return 0
}    else if (num_feet > 400 && num_feet <= 2000) {
    return Number((0.02 * (num_feet - 400)).toFixed(2))
  } else if (num_feet > 2000 && num_feet <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
// return .02 * (distance - 400);
