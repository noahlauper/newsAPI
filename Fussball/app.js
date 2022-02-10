fetch('https://api.football-data.org/v2/teams/86/matches?status=SCHEDULED', {
    headers: { 'X-Auth-Token': '4d111a4bf7654a24aa3caac1df58401d' },
    method: 'GET'
})

.then((response) => {
    return response.json();
})

.then(data => {
    const html = data.matches
    .map (matches =>{
        return `
        <div class ="Team">
            <p>
                Home Team: ${JSON.stringify(matches.homeTeam.name)}</br>
                Away Team: ${JSON.stringify(matches.awayTeam.name)} 
            </p>
        </div> 
        `
    });
    document.querySelector('#app').innerHTML= html
    .join("")
})


.catch(function (err) {
    console.log('error: ' + err);
});



