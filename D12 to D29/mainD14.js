// Q#40
console.log("\nQuestion#40");
function albumDetails(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(albumDetails("Artist One", "First"));
console.log(albumDetails("Artist Two", "Second", 99));
// Q#41
console.log("\nQuestion#41");
var magicianNames = ["Josua", "Campa", "Tom", "Tim"];
function magicians(magicians) {
    magicians.forEach(function (magician, key) {
        console.log("".concat(++key, ". ").concat(magician));
    });
}
magicians(magicianNames);
// Q#42
console.log("\nQuestion#42");
function isGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
isGreat(magicianNames);
magicians(magicianNames);
