guestList = ["Alisha", 'Areeba', 'Samreen', 'Anum'];

newGuest = "Anabiya";
guestList[2] = newGuest;


console.log("We have arrange the large dinner, So I'm sending some more invitations");

guestList.unshift("Rubab");// add element at first index
let itemRemovedFromtheList = 0;
// first parametern of splice() will take the value that where you want to insert the value, I want to insert in middle
guestList.splice((guestList.length/2).toFixed(), itemRemovedFromtheList, 'Bushra');// add element at middle  index
guestList.push("Sania");// add element at last index


console.log("Previouse Invited Guests...")
for(i=0; i<guestList.length; i++){
    console.log(guestList[i]);

}
alert('Sorry, We have just space for two people at Dinner');
numOfPeopleInvited = 0;
for(i=guestList.length-1; i>1; i--){
      console.log("Hi "+guestList[i]+". Sorry, You're not invited due to space inconvenience.");
      guestList.pop();
}

console.log("Current Invited Guests...")
for(i=0; i<guestList.length; i++){
    console.log(guestList[i]," You are  invited");
}

guestList.pop();
guestList.pop();
if(guestList.length == 0){
  console.log("You have an empty guest list.")
}

