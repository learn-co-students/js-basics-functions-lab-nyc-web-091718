// Code your solution in this file!

function distanceFromHqInBlocks (location) {
  if (location > 42) {
    return location - 42;
  } else {
    return 42 - location;
  }
}

function distanceFromHqInFeet (location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end)*264;
  } else {
    return (end - start)*264;
  }
}

function calculatesFarePrice(start, destination) {
  let trip = distanceTravelledInFeet(start, destination);

  if (trip > 2500) {
    return "cannot travel that far";
  } else if (trip > 2000) {
    return 25;
  } else if (trip > 400) {
    return (trip - 400)*.02
  } else {
    return 0;
  }
}
