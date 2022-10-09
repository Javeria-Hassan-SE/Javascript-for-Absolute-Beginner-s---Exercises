var magicians = ['Magician 1', 'Magician 2', 'Magician 3'];
make_great(magicians);
show_magicians(magicians);

function show_magicians(magicians){
  for (i=0; i<magicians.length; i++){
    console.log(magicians[i]);
  }
}

function make_great(magicians){
  for (i=0; i<magicians.length; i++){
    magicians[i] = "Great "+ magicians[i];
  }
}