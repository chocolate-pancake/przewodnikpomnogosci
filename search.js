let params = new URL(window.location.href)
let query = params.searchParams.get("q");





let html = document.createElement("div");
let scores = {};
let urls = ["https://przewodnikpomnogosci.pl/mnogosc", "https://przewodnikpomnogosci.pl/powstawanie", "https://przewodnikpomnogosci.pl/system", "https://przewodnikpomnogosci.pl/wspolosoby/", "https://przewodnikpomnogosci.pl/wewnetrzny-swiat", "https://przewodnikpomnogosci.pl/frontowanie", "https://przewodnikpomnogosci.pl/wspolosoby/komunikacja", "https://przewodnikpomnogosci.pl/wspolosoby/okreslenia", "https://przewodnikpomnogosci.pl/wspolosoby/role", "https://przewodnikpomnogosci.pl/wspolosoby/wewnetrzne-funkcjonowanie", "https://przewodnikpomnogosci.pl/wyjasnienia/alternatywne-wyjasnienia", "https://przewodnikpomnogosci.pl/wyjasnienia/neurobiologia", "https://przewodnikpomnogosci.pl/zaburzenia/dysocjacja", "https://przewodnikpomnogosci.pl/zaburzenia/dysocjacyjne-zaburzenie-tozsamosci", "https://przewodnikpomnogosci.pl/zaburzenia/osdd", "https://przewodnikpomnogosci.pl/zaburzenia/zespol-stresu-pourazowego", "https://przewodnikpomnogosci.pl/materialy/dla-bliskich", "https://przewodnikpomnogosci.pl/materialy/dla-systemow", "https://przewodnikpomnogosci.pl/materialy/dla-zastanawiajacych-sie", "https://przewodnikpomnogosci.pl/wyjasnienia/", "https://przewodnikpomnogosci.pl/terminologia", "https://przewodnikpomnogosci.pl/", "https://przewodnikpomnogosci.pl/zrodla", "https://przewodnikpomnogosci.pl/system-teczowego-chaosu"];

let results = null;

async function search(){
    
    let queries = query.toLowerCase().split(" ");
    console.log(queries);
    let promise, object, page, title, searchables, score;
    let parser = new DOMParser;

    for(let i = 0; i < urls.length; i ++){
        try{
            promise = await fetch(urls[i]);
        }
        catch{
            results.append(document.createTextNode("Przepraszamy, coś poszło nie tak. Jeżeli błąd będzie się powtarzał, skontaktuj się z nami."));
            document.getElementById("loading").classList.toggle("animated");
        }
        object = await promise.text();
        page = await parser.parseFromString(object, "text/html");
        // html += text;
        score = 0;
        title = page.querySelector("h1").textContent;
        for(q in queries){
            if(title.includes(q)){
                score += 10000;
            }
        }
        searchables = page.querySelectorAll("h2, h3, h4, p");    // i < lenght - 9

    }


}



function content(){
    let title = document.querySelector("h1");
    title.textContent = "Wyniki wyszukiwania dla: " + query;
    results = document.getElementById("results");
    // results.insertAdjacentHTML("afterbegin", html);
    search();
}

document.addEventListener("DOMContentLoaded", content);