var userNames = ['Javeria001', 'Anum001', 'Alisha001', 'Hamza001', 'Usama001'];
var newUserNames = ['javeria001', 'Anum001', 'Adeel001', 'Mansoor001', 'Alvera001'];

for (i =0; i< newUserNames.length; i++){
  for(j=0; j<userNames.length; j++){
    if(newUserNames[i].toLowerCase() == userNames[i].toLowerCase()){
      console.log(newUserNames[i], " Username is unavailable");
    }
  }
}

