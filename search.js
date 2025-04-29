let params = new URL(window.location.href)
let query = params.searchParams.get("q");
let title = document.querySelector("h1");
let error = 0;
if(!query){
    title.textContent = "Błąd wyszukiwania";
    document.title = "Błąd wyszukiwania | Przewodnik po Mnogości"
    results.append(document.createTextNode("Nie możemy wyszukać czegoś, czego nie ma."));
    document.getElementById("loading").classList.toggle("animated");
    error = 1;
    
}
else {
    title.textContent = "Wyniki wyszukiwania dla: " + query;
    document.title = "Wyszukiwanie: " + query + " | Przewodnik po Mnogości";
    let results = document.getElementById("results");
    // results.insertAdjacentHTML("afterbegin", html);
function max(a, b){
    if(a > b){
        return a;
    }
    return b;
}

function min(a, b){
    if(a < b){
        return a;
    }
    return b;
}

let uppers = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł','M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ż', 'Ź'];
function isUpperCase(char){
    if(uppers.includes(char)){
        return true;
    }
    return false;
}

function isLetter(char){
    if(uppers.includes(char.toUpperCase())){
        return true;
    }
    return false;
}

let html = [];
let urls = ["https://przewodnikpomnogosci.pl/materialy/podstawy-mnogosci", "https://przewodnikpomnogosci.pl/czeste-pytania", "https://przewodnikpomnogosci.pl/mnogosc", "https://przewodnikpomnogosci.pl/powstawanie", "https://przewodnikpomnogosci.pl/system", "https://przewodnikpomnogosci.pl/wspolosoby/", "https://przewodnikpomnogosci.pl/wewnetrzny-swiat", "https://przewodnikpomnogosci.pl/frontowanie", "https://przewodnikpomnogosci.pl/wspolosoby/komunikacja", "https://przewodnikpomnogosci.pl/wspolosoby/okreslenia", "https://przewodnikpomnogosci.pl/wspolosoby/cechy-i-tozsamosc", "https://przewodnikpomnogosci.pl/wspolosoby/role", "https://przewodnikpomnogosci.pl/wspolosoby/wewnetrzne-funkcjonowanie", "https://przewodnikpomnogosci.pl/wyjasnienia/neurobiologia", "https://przewodnikpomnogosci.pl/wyjasnienia/lista-artykulow-naukowych", "https://przewodnikpomnogosci.pl/wyjasnienia/teoria-strukturalnej-dysocjacji", "https://przewodnikpomnogosci.pl/wyjasnienia/alternatywne-wyjasnienia", "https://przewodnikpomnogosci.pl/zaburzenia/dysocjacja", "https://przewodnikpomnogosci.pl/zaburzenia/dysocjacyjne-zaburzenie-tozsamosci", "https://przewodnikpomnogosci.pl/zaburzenia/osdd", "https://przewodnikpomnogosci.pl/zaburzenia/zespol-stresu-pourazowego", "https://przewodnikpomnogosci.pl/zaburzenia/marzycielstwo-dezadaptacyjne", "https://przewodnikpomnogosci.pl/blog/dysocjacyjne-zaburzenie-tozsamosci-przypadki", "https://przewodnikpomnogosci.pl/blog/dlaczego-nie-osobowosc-wieloraka", "https://przewodnikpomnogosci.pl/materialy/mity-o-did", "https://przewodnikpomnogosci.pl/materialy/coming-out", "https://przewodnikpomnogosci.pl/materialy/dysocjacyjne-zaburzenie-tozsamosci-test", "https://przewodnikpomnogosci.pl/materialy/faceclaimy", "https://przewodnikpomnogosci.pl/materialy/frontowe-wskazniki", "https://przewodnikpomnogosci.pl/materialy/jak-traktowac-system", "https://przewodnikpomnogosci.pl/materialy/leki-na-did-osdd", "https://przewodnikpomnogosci.pl/materialy/mam-objawy-did-osdd", "https://przewodnikpomnogosci.pl/materialy/mapowanie-systemu", "https://przewodnikpomnogosci.pl/materialy/metoda-systemu-kolezenskiego", "https://przewodnikpomnogosci.pl/materialy/mnogosc-a-zwyczajne-doswiadczenia", "https://przewodnikpomnogosci.pl/materialy/mnogosc-a-marzycielstwo", "https://przewodnikpomnogosci.pl/materialy/negacja-zaburzenia-dysocjacyjne", "https://przewodnikpomnogosci.pl/materialy/osoby-przesladujace-radzenie-sobie", "https://przewodnikpomnogosci.pl/materialy/pluralkit", "https://przewodnikpomnogosci.pl/materialy/serwer-na-prywatne-wiadomosci", "https://przewodnikpomnogosci.pl/materialy/pomoc-flashback", "https://przewodnikpomnogosci.pl/materialy/przydatne-aplikacje", "https://przewodnikpomnogosci.pl/materialy/sposoby-na-zapominanie", "https://przewodnikpomnogosci.pl/materialy/systemowa-wspolpraca", "https://przewodnikpomnogosci.pl/materialy/trauma-systemy", "https://przewodnikpomnogosci.pl/materialy/trauma-z-twojej-winy", "https://przewodnikpomnogosci.pl/materialy/samodzielna-diagnoza", "https://przewodnikpomnogosci.pl/materialy/trzyfazowe-leczenie-did-osdd", "https://przewodnikpomnogosci.pl/materialy/zaburzona-a-niezaburzona-mnogosc", "https://przewodnikpomnogosci.pl/materialy/plynnoplciowosc-a-mnogosc", "https://przewodnikpomnogosci.pl/materialy/wsparcie-w-kryzysie", "https://przewodnikpomnogosci.pl/materialy/sprzecznosc-podniecenia-seksualnego", "https://przewodnikpomnogosci.pl/materialy/tworzenie-wewnetrznego-swiata", "https://przewodnikpomnogosci.pl/materialy/tworzenie-wspolosob", "https://przewodnikpomnogosci.pl/materialy/udawana-mnogosc", "https://przewodnikpomnogosci.pl/materialy/wejscie-do-wewnetrznego-swiata", "https://przewodnikpomnogosci.pl/materialy/zakotwiczanie", "https://przewodnikpomnogosci.pl/materialy/wskazniki-tonu", "https://przewodnikpomnogosci.pl/blog/teoria-strukturalnej-dysocjacji-nie-wspiera-enofobii", "https://przewodnikpomnogosci.pl/wyjasnienia/", "https://przewodnikpomnogosci.pl/terminologia", "https://przewodnikpomnogosci.pl/", "https://przewodnikpomnogosci.pl/materialy/", "https://przewodnikpomnogosci.pl/system-teczowego-chaosu", "https://przewodnikpomnogosci.pl/system-teczowego-chaosu/host", "https://przewodnikpomnogosci.pl/system-teczowego-chaosu/krzysztof", "https://przewodnikpomnogosci.pl/blog/kto-pisze-teksty-na-stronie", "https://przewodnikpomnogosci.pl/blog/jesli-natura-usprawiedliwia-oprawce", "https://przewodnikpomnogosci.pl/blog/zaphod-beeblebrox-a-mnogofobia", "https://przewodnikpomnogosci.pl/blog/baza-osob-psychologicznych", "https://przewodnikpomnogosci.pl/blog/papiez-nie-jest-sojusznikiem-lgbt", "https://przewodnikpomnogosci.pl/blog/terapia-konwersacyjna", "https://przewodnikpomnogosci.pl/blog/zmiana-licencji"];
let stopwords = ['albo', 'bardzo', 'bez', 'co', 'czemu', 'czy', 'dla', 'dlaczego', 'do', 'dużo', 'gdyby', 'gdzie', 'i', 'ile', 'inny', 'jak', 'jakby', 'jaki', 'jakie', 'jaka', 'jeśli', 'jest', 'jeżeli', 'każda', 'każde', 'każdy', 'kiedy', 'kto', 'lub', 'ma', 'mają', 'mogę', 'może', 'na', 'nic', 'nich', 'nie', 'nigdy', 'niż', 'o', 'od', 'około', 'osoba', 'osoby', 'osób', 'osobom', 'osobie', 'po', 'pod', 'przed', 'są', 'się', 'skąd', 'system', 'systemy', 'systemu', 'systemowi', 'systemowy', 'tak', 'taki', 'to', 'współosoba', 'współosoby', 'współosób', 'współosobom', 'współosobie', 'wszystko', 'wtedy', 'żaden', 'zawsze']

async function search(){
    
    let allQueries = query.toLowerCase().split(" ");
    let queries = [], secondaryQueries = [];
    for (let q = 0; q < allQueries.length; q ++){
        if(!stopwords.includes(allQueries[q])){
            queries.push(allQueries[q]);
        }
        else {
            secondaryQueries.push(allQueries[q]);
        }
    }

    if(queries.length === 0){
        queries = secondaryQueries;
    }

    let promise, object, page, first, searchables, words, highlited, score, fragments, content, fragment;
    let parser = new DOMParser;

    for(let i = 0; i < urls.length; i ++){
        try{
            promise = await fetch(urls[i]);
        }
        catch{
            document.getElementById("loading").classList.toggle("animated");
            results.append(document.createTextNode("Przepraszamy, coś poszło nie tak. Spróbuj odświeżyć stronę. Jeżeli błąd będzie się powtarzał, skontaktuj się z nami."));
        }
        object = await promise.text();
        page = await parser.parseFromString(object, "text/html");
        // html += text;
        let article = document.createElement("article");
        article.setAttribute("class", "searchResult");
        score = 0;
        first = page.querySelector("h1").textContent;
        if(first.includes("Strona Główna")){
            first = "Strona Główna";
        }
        words = first.split(" ");
        let titleLink = document.createElement("a");
        titleLink.setAttribute("class", "titleLink");
        titleLink.setAttribute("href", urls[i]);
        for(let w = 0; w < words.length; w ++){
            highlited = 0;
            for (let q = 0; q < queries.length; q ++){
                if(words[w].toLowerCase().trim() === queries[q]){
                    highlited = 1;
                    score += 1000000;
                    break;
                }
                else if(words[w].toLowerCase().trim().includes(queries[q])){
                    highlited = 1;
                    score += 100000;
                    break;
                }
            }
            for (let q = 0; q < secondaryQueries.length; q ++){
                if(words[w].toLowerCase().trim() === secondaryQueries[q]){
                    // highlited = 1;
                    score += 100;
                    break;
                }
                if(words[w].toLowerCase().trim().includes(secondaryQueries[q])){
                    // highlited = 1;
                    score += 10;
                    break;
                }
            }
            if(highlited){
                let keyword = document.createElement("mark");
                keyword.append(document.createTextNode(words[w]));
                keyword.setAttribute("class", "highlited");
                titleLink.append(keyword, document.createTextNode(" "));
            }
            else{
                titleLink.append(document.createTextNode(words[w] + " "));
            }
        }
        article.append(titleLink);

        searchables = page.querySelectorAll("h2, h3, h4, p, li");
        fragments = [];
        for(let s = 0; s < searchables.length - 12; s ++){ //excluding paras from footer
            if(searchables[s].parentElement.className.includes("wykluczone")){
                continue;
            }
            content = '';
            for(let i = 0; i < searchables[s].childNodes.length; i ++){
                if(searchables[s].childNodes[i].tagName !== "SUP" && (!searchables[s].childNodes[i].className || (!searchables[s].childNodes[i].className.includes("masculine") && !searchables[s].childNodes[i].className.includes("feminine") && !searchables[s].childNodes[i].className.includes("neutral") && !searchables[s].childNodes[i].className.includes("postgender") && !searchables[s].childNodes[i].className.includes("for-aria")))){ 
                    //preventing from showing content that was not meant to be visible and also superscripts because they're useless when we're getting rid of links
                    content += searchables[s].childNodes[i].textContent;
                }
            }
            words = content.trim().split(" ");
            for(let w = 0; w < words.length; w ++){
                for (let q = 0; q < queries.length; q ++){
                    if(words[w].toLowerCase().trim().includes(queries[q])){
                        if(searchables[s].tagName === "P" || searchables[s].tagName === "LI"){
                            score += 100;
                            let fragmentScore = 0;
                            fragment = document.createElement('p');
                            if(!isUpperCase(words[max(0, w - 10)][0])){
                                fragment.append("...");
                            }
                            for(let f = max(0, w - 10); f < w; f ++){
                                fragment.append(words[f] + " ");
                            }
                            let word = words[w];
                            let ending = '';
                            if(!isLetter(word[0])){
                                fragment.append(word[0]);
                                word = word.slice(1);
                            }
                            if(!isLetter(word[word.length - 1])){
                                ending = word[word.length - 1];
                                word = word.slice(0, word.length - 1);
                            }
                            ending += " ";
                            let keyword = document.createElement("mark");
                            keyword.append(word);
                            keyword.setAttribute("class", "highlited");
                            fragment.append(keyword, ending);
                            for(let f = w + 1; f < min(words.length, w + 10); f ++){
                                let basic = 1;
                                for (let g = 0; g < queries.length; g ++){
                                    if(words[f].toLowerCase().trim().includes(queries[g])){
                                        score += 200;
                                        fragmentScore += 100;
                                        word = words[f];
                                        ending = '';
                                        if(!isLetter(word[0])){
                                            fragment.append(word[0]);
                                            word = word.slice(1);
                                        }
                                        if(!isLetter(word[word.length - 1])){
                                            ending = word[word.length - 1];
                                            word = word.slice(0, word.length - 1);
                                        }
                                        ending += " ";
                                        let keywordn = document.createElement("mark");
                                        keywordn.append(word);
                                        keywordn.setAttribute("class", "highlited");
                                        fragment.append(keywordn, ending);
                                        basic = 0;
                                        break;
                                    }
                                }
                                if(basic){
                                    fragment.append(words[f] + " ");
                                }
                            }
                            fragment.childNodes[fragment.childNodes.length - 1].textContent = fragment.childNodes[fragment.childNodes.length - 1].textContent.trim();
                            let last = words[min(words.length, w + 10) - 1][words[min(words.length, w + 10) - 1].length - 1];
                            if(last !== '.' && last !== '?' && last !== '!'){
                                fragment.append("...");
                            }
                            if(fragment.textContent.toLowerCase().includes(query.toLowerCase())){
                                score += 400;
                                fragmentScore += 300;
                            }
                            fragments.push({
                                "node": fragment,
                                "score": fragmentScore
                            });
                            w += 10;
                            break;
                        }
                        else{
                            score += 1000;
                            // fragments.push({
                            //     "node": searchables[s],
                            //     "score": 200
                            //     });
                            break;
                        }
                    }
                    if(w >= words.length){
                        break;
                    }
                }
            }
        }

        if(first.trim() === "System Tęczowego Chaosu"){
            score /= 10;
        }

        
        fragments.sort((a, b) => b.score - a.score);
        for(let i = 0; i < min(fragments.length, 4); i ++){
           article.append(fragments[i].node);
       }
        // article.append(document.createTextNode(score));
        if(score > 0){
            html.push({
                "node" : article,
                "score" : score
            });
        }
    }

    html.sort((a, b) => b.score - a.score);

    if(html.length === 0){
        html.push({
            "node" : document.createTextNode("Nie udało nam się znaleźć nic, co odpowiadałoby twojemu zapytaniu. Upewnij się, że nie zawiera ono literówek albo spróbuj wyszukać synonimy lub inną formę interesującego cię słowa."), 
        });
    }
    else {
        html.push({
            "node" : document.createTextNode("Nie widzisz tego, czego szukasz? Spróbuj wpisać synonimy albo inną formę interesującego cię słowa."), 
        });
    }
    document.getElementById("loading").classList.toggle("animated");
    for(let i = 0; i < html.length; i ++){
        results.append(html[i].node);
    }


}


search();

}