
const returnFirstTwoDrivers = function(Array){
  let a = [Array[0],Array[1]]
  return a
}


const returnLastTwoDrivers =function(array){
  let a = [Array[-2], Array[-1]]
}

selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(a){
  return function(b){
      a*b
    }
}
const fareDoubler = function(a){
  return selectingDrivers(a)
}
const fareTripler = function(a){
  return selectingDrivers(a)
}

function selectDifferentDrivers(drivers,functionOneOrTwo){
  return functionOneOrTwo(drivers)
  
}