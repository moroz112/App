function getHero() {
    return fetch('https://swapi.co/api/', {
        method: 'GET'
    })
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(resp){
            console.log(resp);
        });
}
getHero();