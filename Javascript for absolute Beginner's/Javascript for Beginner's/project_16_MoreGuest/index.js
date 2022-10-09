guestList = ["Alisha", 'Areeba', 'Samreen', 'Anum'];

console.log("Old Invited Guests...")
for(i=0; i<guestList.length; i++){
    console.log(guestList[i]," You are  invited");
}

console.log("Unfortunately,  "+guestList[2]+" can't join us at dinner due to having work commitment.");
newGuest = "Anabiya";
guestList[2] = newGuest;

console.log("Updated Invited Guests...")
for(i=0; i<guestList.length; i++){
    console.log(guestList[i]," You are  invited");
}

console.log("We have arrange the large dinner, So I'm sending some more invitations");

guestList.unshift("Rubab");// add element at first index
let itemRemovedFromtheList = 0;
// first parametern of splice() will take the value that where you want to insert the value, I want to insert in middle
guestList.splice((guestList.length/2).toFixed(), itemRemovedFromtheList, 'Bushra');// add element at middle  index
guestList.push("Sania");// add element at last index

console.log("Current Invited Guests...")
for(i=0; i<guestList.length; i++){
    console.log(guestList[i]," You are  invited");
}


