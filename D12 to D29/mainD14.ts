// Q#40
console.log("\nQuestion#40");

function albumDetails(artist: string, title: string, tracks?: number) {
    let album = {
        artist,
        title
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

let magicianNames: string[] = ["Josua", "Campa", "Tom", "Tim"];
function magicians(magicians: string[]) {
    magicians.forEach((magician,key) => {
        console.log( `${++key}. ${magician}`);

    });
}
magicians(magicianNames);

// Q#42
console.log("\nQuestion#42");

function isGreat(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
isGreat(magicianNames);
magicians(magicianNames);
