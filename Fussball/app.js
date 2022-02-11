function fetchWinner(winnerId) {
    fetch('https://api.football-data.org/v2/competitions/' + winnerId + "/", {
        headers: { 'X-Auth-Token': '231ac5e64da74b0da63a430b667d14a0' },
        method: 'GET'
    })
        .then((response) => {
            return response.json();
        })

        .then(data => {
            console.log(data.seasons)
            const html = data.seasons
                .map(seasons => {
                    return `
        <div class ="data">
        <p>
            Winner: ${JSON.stringify(seasons.winner?.name)}</br>
            Date: ${JSON.stringify(seasons.endDate)}
        </p>
        </div>
        `
                });
            console.log(html)
            document.querySelector('#app').innerHTML = html
                .join("")
        })

        .catch(function (err) {
            console.log('error: ' + err);
        }
        )}


//CL 2001
//2012
//PL 2021

