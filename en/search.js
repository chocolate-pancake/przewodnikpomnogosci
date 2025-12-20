let params = new URL(window.location.href)
let query = params.searchParams.get("q");
let title = document.querySelector("h1");
let error = 0;
if(!query){
    title.textContent = "Search error";
    document.title = "Search error | Przewodnik po Mnogości"
    results.append(document.createTextNode("We can't search for something that doesn't exist."));
    document.getElementById("loading").classList.toggle("animated");
    error = 1;
    
}
else {
    title.textContent = "Search results for: " + query;
    document.title = "Search: " + query + " | Guide to Plurality";
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

let uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
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
let urls = ["/en/", "/en/resources/preventing-splits", "/en/resources/genderfluidity-vs-plurality", "/en/resources/plurality-vs-common-experiences", "/en/science/family-systems-theory", "/en/science/four-factor-theory", "/en/science/scientific-publication-list", "/en/science/alters-with-different-disorders", "/en/blog/theory-of-structural-dissociation-doesnt-support-endophobia", "/en/resources/", "/en/the-rainbow-chaos-system", "/en/science/", "/en/blog/"];
let stopwords = ['what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those',  'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 'can', 'will', 'just', 'should', 'now', 'system', 'systems', 'headmate', 'headmates']

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
            results.append(document.createTextNode("Sorry, something went wrong. Try refreshing the page. If the error reocurrs, contact us."));
        }
        object = await promise.text();
        page = await parser.parseFromString(object, "text/html");
        // html += text;
        let article = document.createElement("article");
        article.setAttribute("class", "searchResult");
        score = 0;
        first = page.querySelector("h1").textContent;
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

        if(first.trim() === "The Rainbow Chaos System"){
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
            "node" : document.createTextNode("We were unable to find any matches. Make sure that your prompt doesn't have any spelling errors or try searching for synonyms of the word you want to find."), 
        });
    }
    else {
        html.push({
            "node" : document.createTextNode("Not seeing what you're searching for? Try searching for synonyms of the word you want to find."), 
        });
    }
    document.getElementById("loading").classList.toggle("animated");
    for(let i = 0; i < html.length; i ++){
        results.append(html[i].node);
    }


}


search();

}