// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  const startBlock = 42;
  return Math.abs(startBlock - someValue);
}

function distanceFromHqInFeet (someValue) {
  blocks = distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
  return blocks * 264;
}

function distanceTravelledInFeet(start,finish){
  return Math.abs(start-finish)*264;
}
function calculatesFarePrice(start, finish){
  let blockDifference = Math.abs(start-finish);
  let feetDifference = distanceTravelledInFeet(start,finish);
  let totalCharge;
  if (blockDifference == 1){
    totalCharge = 0;
  }
  else if(feetDifference > 400 && feetDifference < 2000){
    totalCharge = (feetDifference-400) * 0.02;
  }
  else if(feetDifference > 2000 && feetDifference < 2500){
    totalCharge = 25;
  }
  else{
    totalCharge = "cannot travel that far";
  }
  return totalCharge;

}
