// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  if(someValue > 42){
    return someValue - 42
  }
  else if (someValue < 42){
    return 42 - someValue
  }
  else {
    return 0
  }
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet (street1, street2) {
  if(street1 > street2){
    return (street1 - street2) * 264
  } else {
    return (street2 - street1) * 264
  }

}

function calculatesFarePrice (street1, street2) {
  let distance = distanceTravelledInFeet (street1, street2);
  if (distance <= 400){
    return 0
  }
  else if (distance <= 2000) {
    return (distance - 400) * 0.02
  } else if (distance <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
