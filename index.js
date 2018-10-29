// Code your solution in this file!

function distanceFromHqInBlocks(location)
{
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location)
{
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(begin,end)
{
  return Math.abs(end - begin) * 264;
}

function calculatesFarePrice(start,destination)
{
  distance = distanceTravelledInFeet(start,destination);

  if (distance <= 400)
  {
        return 0;
  }
  else if (distance > 400 && distance <= 2000 )
  {
      return (0.02 * (distance - 400));
  }

  else if (distance > 2000 && distance <= 2500 )
  {
    return 25;
  }

  else
  {
    return 'cannot travel that far';
  }
}
