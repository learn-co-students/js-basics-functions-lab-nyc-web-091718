// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  //returns the number of blocks given a value
  if (street > 42) {
  return street - 42
}  else {
  return 42 - street
}
}


function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
  return (start - end) * 264
}  else
return (end - start) * 264
}

function calculatesFarePrice(start, end) {
  if (distanceTravelledInFeet(start, end) <= 400) {
    return 0
}    else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) <= 2000) {
    // return parseFloat(0.02 * distanceTravelledInFeet(start, end) - 8).toFixed(2)
    return Number((0.02 * distanceTravelledInFeet(start, end) - 8).toFixed(2))
  } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
