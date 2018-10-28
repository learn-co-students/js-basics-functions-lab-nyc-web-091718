const hq = 42

function distanceFromHqInBlocks (destination) {
  if (destination > hq ) {
    return destination - hq;
  } else {
    return hq - destination;
  }
}

function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * 264
}

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    return (destination - start) * 264
  } else {
    return (start - destination) * 264
  }
}

function calculatesFarePrice(start, destination) {
  var feet = distanceTravelledInFeet(start, destination)
  if (feet < 400) {
    return 0
  } else if (feet > 2000 && feet < 2500) {
    return 25
  } else if (feet < 2000) {
    return (feet - 400) * .02
  } else {
    return "cannot travel that far"
  }
}
