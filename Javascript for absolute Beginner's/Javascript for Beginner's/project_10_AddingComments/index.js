var personName = "Javeria hassan";

// This function will convert the string into Title case (i.e javeria hassan will be converted into Javeria Hassan)
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  // Print Message on screen
var printMessage = "Name Cases: \n Lower Case:  "+personName.toLowerCase() +"\n Upper Case: "+personName.toUpperCase()+
"\n Title Case: "+ toTitleCase(personName);
console.log(printMessage);

// This line will show your Javascript variable value on HTML Page
document.write(printMessage);


