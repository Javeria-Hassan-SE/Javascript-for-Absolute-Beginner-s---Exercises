usernames = [];
if(usernames.length !=0){
  for(i=0; i<usernames.length; i++){
    if(usernames[i]=="Admin"){
      console.log("Hello ",usernames[i],"! Would you like you to see a status report?");
    }
    else{
      console.log("Hello ", usernames[i], ", thank you for logging in again");
    }
  }
}
else{
  console.log("We need to find some users");
  usernames.unshift('user001', 'user002', 'user003', 'user004', 'user005', 'Admin');
  for(i=0; i<usernames.length; i++){
    if(usernames[i]=="Admin"){
      console.log("Hello ",usernames[i],"! Would you like you to see a status report?");
    }
    else{
      console.log("Hello ", usernames[i], ", thank you for logging in again");
    }
  }
}