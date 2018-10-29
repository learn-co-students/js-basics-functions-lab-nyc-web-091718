// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  if (blocks>42){
    return blocks - 42;
  }else{
    return 42 - blocks;
  }
}

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks)*264;
}

function distanceTravelledInFeet(start, finish){
  if (finish > start){
    return (finish - start) * 264
  }else{
    return (start - finish) * 264
  }
}

function calculatesFarePrice (start, finish) {
  const feetDistance = distanceTravelledInFeet(start, finish);

  if (feetDistance <= 400) {
    return 0;
  } else if (feetDistance > 400 && feetDistance <= 2000) {
    return .02 * (feetDistance - 400);
  } else if (feetDistance > 2000 && feetDistance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
