
fetch('https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED', {
    headers: { 'X-Auth-Token': '4d111a4bf7654a24aa3caac1df58401d' },
    method: 'GET'
})

.then((response) => {
    return response.json();
})

.then(data => {
    console.log(data.matches)
    const html = data.matches.map (matches =>{
        return `<p>Away Team: ${JSON.stringify(matches.awayTeam.name)}</p>`
    });
    console.log(html)
    document.querySelector('#app').innerHTML= html
})

.then(data => {
    console.log(data.matches)

    const html2 = data.matches.map (matches =>{
        return `<p>Home Team: ${JSON.stringify(matches.homeTeam.name)}</p>`
    })
    document.querySelector('#app2').innerHTML= html2
})

.catch(function (err) {
    console.log('error: ' + err);
});



/*
function appendData(data) {
var mainContainer = document.getElementById("myData");
for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
    mainContainer.appendChild(div);
}
}
.then((Json) => {
    console.log(Json)
})*/

/*
.then(function (response) {
    console.log(response);
    appendData(data);
    return response.json();
})
document.getElementById("myData").innerHTML = 'response';

*/
