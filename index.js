// Code your solution in this file!
function distanceFromHqInBlocks(loc){
  return (Math.abs(loc - 42))
}

function distanceFromHqInFeet(loc){
  return distanceFromHqInBlocks(loc) * 264
}

function distanceTravelledInFeet(loc1, loc2){
  return (Math.abs((loc2-loc1)*264))
}

function calculatesFarePrice(start, dest){
  let distance = distanceTravelledInFeet(start, dest)

  if (distance < 400){
    return 0;
  }
  else if (distance < 2000){
    return (distance - 400) * 0.02;
  }
  else if (distance <= 2500){
    return 25.00;
  }
  else{
    return "cannot travel that far"
  }
}
