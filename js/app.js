"use strict";
const api = "https://api.coincap.io/v2/assets";
function getData(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data.data));
}
getData(api);
const main = document.getElementById("main");
function setData(data) {
    data.forEach((value) => {
        const { rank, name, symbol, priceUsd, explorer } = value;
        main.innerHTML += `<div class="contentDiv">
    <div class="rank">${rank}</div>
    <div class="name">${name}</div>
    <duv class="symbol">${symbol}</duv>
    <div class="price">${(+priceUsd).toFixed(2)}</div>
</div>`;
    });
}
//# sourceMappingURL=app.js.map