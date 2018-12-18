const apiKey = '6c96388ed5f8824e3cd0eb5d370fe783';
const apiBaseUrl = 'http://data.fixer.io/api/';
const endpointCurrentRates = 'latest?access_key=';

document.body.onload = getCurrentRates();

function getCurrentRates() {
    const Http = new XMLHttpRequest();
    const url = apiBaseUrl + endpointCurrentRates + apiKey

    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}

