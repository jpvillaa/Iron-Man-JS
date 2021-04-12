let url = "https://www.superheroapi.com/api.php/4431252150221769/346";

function info(callback) {
    return new Promise(function (resolve, reject) {
        $.get(url, { crossDomain: true }, (data) => resolve(data)).fail((error) => reject(error));
    });
}

info().then(function ({ name, powerstats, biography, work }) {
    document.getElementById("name").insertAdjacentText('beforeend', name);
    document.getElementById("intelligence").insertAdjacentText('beforeend', powerstats.intelligence);
    document.getElementById("strength").insertAdjacentText('beforeend', powerstats.strength);
    document.getElementById("speed").insertAdjacentText('beforeend', powerstats.speed);
    document.getElementById("durability").insertAdjacentText('beforeend', powerstats.durability);
    document.getElementById("power").insertAdjacentText('beforeend', powerstats.power);
    document.getElementById("combat").insertAdjacentText('beforeend', powerstats.combat);
    document.getElementById("full-name").insertAdjacentText('beforeend', biography["full-name"]);
    document.getElementById("place-of-birth").insertAdjacentText('beforeend', biography["place-of-birth"]);
    document.getElementById("occupation").insertAdjacentText('beforeend', work.occupation);
    document.getElementById("base").insertAdjacentText('beforeend', work.base);

    
}).catch(function (error) {
    console.log(error);
});

info().then(function (data) {
   console.log(data);
}).catch(function (error) {
    console.log(error);
});