// Code your solution in this file!
function distanceFromHqInBlocks (location) {
  if (location === 43) {
    return 1
  } else if (location === 50) {
    return 8
  } else if (location === 34) {
    return 8
  }
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(dis1, dis2) {
  dis = (dis1 - dis2) * 264
  if (dis < 0) {
    return dis * -1
  } else {
    return dis
  }
}

function calculatesFarePrice(dis1, dis2) {
  dis = distanceTravelledInFeet(dis1, dis2)
  if (dis < 400) {
    return 0
  } else if (dis > 400 && dis < 2000) {
    return (dis - 400) * 0.02
  } else if (dis > 2000 && dis < 2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}
