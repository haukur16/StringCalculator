function add(numbers) {

  if (numbers == "")
  return 0;
  if (numbers.includes(","||"\n"||" "))
  {
    if (numbers.includes("-"))
    {
      var negativenumber = numbers.split(",");
      return negativeNum(negativenumber);
    }
    var numberArray = numbers.split(/\D+/);
    return sum(numberArray);
  }
  else
    return parseInt(numbers);
}
function sum(numberArray) {
  var total = 0;
  for (var i = 0; i<numberArray.length;i++){
    if (numberArray[i]>1000) {
      numberArray[i] = 0;
    }
    else
    total += parseInt(numberArray[i]);
  }
  return total;
}

function negativeNum(negativenumber){
  var negativeArray = [];
    for (var i = 0; i<negativenumber.length;i++){
      if (negativenumber[i] < 0) {
        if (i == negativenumber.length -1) {
          negativeArray += parseInt(negativenumber[i]);
        }
        else
        negativeArray += parseInt(negativenumber[i]) + ",";
      }
    }

  throw ("Negatives not allowed: " + negativeArray.toString());
}


module.exports = add;
