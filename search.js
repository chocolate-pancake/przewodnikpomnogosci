async function data(){
    let promise = await fetch("https://przewodnikpomnogosci.pl/mnogosc.html");
    return await promise.text();
}

let html = data();

let res = document.getElementById("results");
res.insertAdjacentHTML("afterbegin", html);