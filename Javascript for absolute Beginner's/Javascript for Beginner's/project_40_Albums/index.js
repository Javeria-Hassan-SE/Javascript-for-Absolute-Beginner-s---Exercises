
console.log(make_Album("Atif Aslam", "Adat"));
console.log(make_Album("Asim Azhar", "Humanva"));
console.log(make_Album("Momina Mustehsan", "Coke Studio", 2));

function make_Album(artistName, albumTitle, tracks =0){
  album = {
    artistName: artistName,
    albumTitle: albumTitle,
    tracks: tracks
  }
  return album;
}