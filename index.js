// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let result;
  if (street >= 42) {
      result = street - 42;
  } else if (street < 42) {
      result = 42 - street;
  }
  return result;
}

function distanceFromHqInFeet(street) {
  let result;
  let blocks = distanceFromHqInBlocks(street);
  result = blocks * 264;
  return result;
}

function distanceTravelledInFeet(startSt, endSt) {
  let result;
  let blocks = 0;
  if (endSt >= startSt) {
      blocks = endSt - startSt;
      result = blocks * 264;
  } else if (startSt > endSt) {
    blocks = startSt - endSt;
    result = blocks * 264;
  }
  return result;
}

function calculatesFarePrice(startSt, endSt) {
  let result;
  let distance = distanceTravelledInFeet(startSt, endSt);
  if (distance <= 400) {
    result = 0;
  } else if (distance > 400 && distance <= 2000) {
    result = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    result = 25;
  } else if (distance > 2500) {
    result = 'cannot travel that far';
  }
  return result;
}
