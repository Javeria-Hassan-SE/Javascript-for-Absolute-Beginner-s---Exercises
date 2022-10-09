var personName = "Javeria hassan";

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

var printMessage = "Name Cases: \n Lower Case:  "+personName.toLowerCase() +"\n Upper Case: "+personName.toUpperCase()+
"\n Title Case: "+ toTitleCase(personName);
console.log(printMessage);
document.write(printMessage);


