var ordinalNumbers = [1,2,3,4,5,6,7,8,9];
for (i=0; i<ordinalNumbers.length; i++){
  if(ordinalNumbers[i] == 1){
    console.log("1st");
  }
  else if(ordinalNumbers[i] == 2){
    console.log("2nd");
  }
  else if(ordinalNumbers[i] == 3){
    console.log("3rd");
  }
  else if(ordinalNumbers[i] > 3){
    console.log(ordinalNumbers[i]+"th");
  }
}
