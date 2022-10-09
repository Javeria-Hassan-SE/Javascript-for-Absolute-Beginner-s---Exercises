var usernames = ['user001', 'user002', 'user003', 'user004', 'user005', 'Admin'];
for(i=0; i<usernames.length; i++){
  if(usernames[i]=="Admin"){
    console.log("Hello ",usernames[i],"! Would you like you to see a status report?");
  }
  else{
    console.log("Hello ", usernames[i], ", thank you for logging in again");
  }
}