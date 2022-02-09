fetch('http://api.football-data.org/v2/matches', {
    headers: { 'X-Auth-Token': '4d111a4bf7654a24aa3caac1df58401d' },
    method: 'GET'
})
.then(function (response) {
    console.log(response);
    appendData(data);
    return response.json();
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
var mainContainer = document.getElementById("myData");
for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
    mainContainer.appendChild(div);
}
}