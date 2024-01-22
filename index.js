
const inputEl = document.getElementById("input-el")
const CToK = document.getElementById("ctok-el");
const KToC = document.getElementById("ktoc-el");
const MsToKmh = document.getElementById("mstokmh-el");
const KmhToMs = document.getElementById("kmhtoms-el");
const LyToKm = document.getElementById("lytokm-el");
const KmToLy = document.getElementById("kmtoly-el");
const ansEl = document.getElementById("ans-el");

CToK.addEventListener("click", function() {
    let ansNum = parseFloat(inputEl.value) + 273.15;
    let ansStr = `
        <p>${parseFloat(inputEl.value)} °C = ${ansNum.toFixed(2)} K<p>   
    `
    retrieve(ansStr)
});

KToC.addEventListener("click", function() {
    let ansNum = parseFloat(inputEl.value) - 273.15;
    let ansStr = `
        <p>${parseFloat(inputEl.value)} K = ${ansNum.toFixed(2)} °C<p>   
    `
    retrieve(ansStr)
});

MsToKmh.addEventListener("click", function() {
    let ansNum = parseFloat(inputEl.value) * 3.6;
    let ansStr = `
        <p>${parseFloat(inputEl.value)} m/s = ${ansNum.toFixed(2)} km/h<p>   
    `
    retrieve(ansStr)
});

KmhToMs.addEventListener("click", function() {
    let ansNum = parseFloat(inputEl.value) / 3.6;
    let ansStr = `
        <p>${parseFloat(inputEl.value)} km/h = ${ansNum.toFixed(2)} m/s<p>   
    `
    retrieve(ansStr)
});

LyToKm.addEventListener("click", function() {
    let ansNum = parseFloat(inputEl.value) * 9.461e12;
    let ansStr = `
        <p>${parseFloat(inputEl.value)} light years = ${ansNum.toFixed(2)} km<p>   
    `
    retrieve(ansStr)
});

KmToLy.addEventListener("click", function() {
    let ansNum = parseFloat(inputEl.value) / 9.461e12;
    let ansStr = `
        <p>${parseFloat(inputEl.value)} km = ${ansNum.toFixed(12)} light years<p>   
    `
    retrieve(ansStr)
});

function retrieve(answer) {
    ansEl.innerHTML = answer;
}