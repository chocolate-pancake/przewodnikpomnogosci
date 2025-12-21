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
let urls = ["/mnogosc/podstawy-mnogosci", "/czeste-pytania", "/mnogosc/spektrum-mnogosci", "/mnogosc/symbole", "/mnogosc/spolecznosc", "/powstawanie", "/system", "/wspolosoby/", "/wewnetrzny-swiat", "/frontowanie", "/wspolosoby/komunikacja", "/wspolosoby/okreslenia", "/wspolosoby/cechy-i-tozsamosc", "/wspolosoby/role", "/wspolosoby/wewnetrzne-funkcjonowanie", "/nauka/neurobiologia", "/nauka/lista-artykulow-naukowych", "/nauka/teoria-czterech-czynnikow", "/nauka/teoria-strukturalnej-dysocjacji", "/nauka/teoria-systemu-wewnetrznej-rodziny", "/mnogosc/wierzenia", "/zaburzenia/dysocjacja", "/zaburzenia/dysocjacyjne-zaburzenie-tozsamosci", "/zaburzenia/osdd", "/zaburzenia/zespol-stresu-pourazowego", "/zaburzenia/marzycielstwo-dezadaptacyjne", "/zaburzenia/autyzm-i-adhd","/mnogosc/mnogosc-a-wielorakosc", "/mnogosc/", "/blog/dysocjacyjne-zaburzenie-tozsamosci-przypadki", "/blog/dlaczego-nie-osobowosc-wieloraka", "/materialy/mity-o-did", "/materialy/coming-out", "/materialy/dysocjacyjne-zaburzenie-tozsamosci-test", "/materialy/faceclaimy", "/materialy/frontowe-wskazniki", "/materialy/jak-traktowac-system", "/materialy/leki-na-did-osdd", "/materialy/mam-objawy-did-osdd", "/materialy/mapowanie-systemu", "/materialy/metoda-systemu-kolezenskiego", "/materialy/mnogosc-a-zwyczajne-doswiadczenia", "/materialy/mnogosc-a-marzycielstwo", "/materialy/negacja-zaburzenia-dysocjacyjne", "/materialy/osoby-przesladujace-radzenie-sobie", "/materialy/pluralkit", "/materialy/serwer-na-prywatne-wiadomosci", "/materialy/pomoc-flashback", "/materialy/przydatne-aplikacje", "/materialy/sposoby-na-zapominanie", "/materialy/systemowa-wspolpraca", "/materialy/trauma-systemy", "/materialy/trauma-posrednia", "/materialy/trauma-z-twojej-winy", "/materialy/samodzielna-diagnoza", "/materialy/trzyfazowe-leczenie-did-osdd", "/materialy/zaburzona-a-niezaburzona-mnogosc", "/materialy/plynnoplciowosc-a-mnogosc", "/materialy/wsparcie-w-kryzysie", "/materialy/warto-wiedziec-przed-terapia", "/materialy/sprzecznosc-podniecenia-seksualnego", "/materialy/tworzenie-wewnetrznego-swiata", "/materialy/tworzenie-wspolosob", "/materialy/udawana-mnogosc", "/materialy/wejscie-do-wewnetrznego-swiata", "/materialy/zakotwiczanie", "/materialy/wskazniki-tonu", "/nauka/systemy-endogeniczne", "/nauka/rozne-zaburzenia-u-wspolosob", "/blog/teoria-strukturalnej-dysocjacji-nie-wspiera-endofobii", "/nauka/", "/terminologia", "/", "/materialy/", "/system-teczowego-chaosu", "/system-teczowego-chaosu/host", "/system-teczowego-chaosu/krzysztof", "/blog/kto-pisze-teksty-na-stronie", "/blog/zlozone-zaburzenia-dysocjacyjne", "/blog/tozsamosc-ustalona", "/blog/jesli-natura-usprawiedliwia-oprawce", "/materialy/jak-reagowac-na-przemoc", "/materialy/przyczyny-i-zapobieganie-wykorzystywaniu-seksualnemu-dzieci", "/blog/zaphod-beeblebrox-a-mnogofobia", "/blog/baza-osob-psychologicznych", "/blog/podatnosc-na-obrzydzenie-a-homofobia", "/blog/papiez-nie-jest-sojusznikiem-lgbt", "/blog/srodki-menstruacyjne-wielokrotnego-uzytku", "/blog/terapia-konwersacyjna", "/blog/nowe-menu", "/blog/zmiana-licencji", "/poprawki-bledow", "/deklaracja-dostepnosci", "/deklaracja-tolerancyjnosci", "/zastrzezenia", "/polityka-prywatnosci"];
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