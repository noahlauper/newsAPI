fetch('https://api.football-data.org/v2/competitions/2000/', {
    headers: { 'X-Auth-Token': '4d111a4bf7654a24aa3caac1df58401d' },
    method: 'GET'
})

.then((response) => {
    return response.json();
})

.then(data => {
    console.log(data.seasons)
    const html = data.seasons
    .map (seasons =>{
        return `
        <div class ="data">
        <p>
            Winner: ${JSON.stringify(seasons.winner.name)}</br>
            Date: ${JSON.stringify(seasons.endDate)}
        </p>
        </div>
        `
    });
    console.log(html)
    document.querySelector('#app').innerHTML= html
    .join("")
})

.catch(function (err) {
    console.log('error: ' + err);
});



