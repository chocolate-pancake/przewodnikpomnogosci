let nonpublicHidden = false

function public(){
    let elements = document.querySelectorAll(".notpublic");
    for(let i = 0; i < elements.length; i ++){
        if(!nonpublicHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    nonpublicHidden = !nonpublicHidden
}

let nonnaturalHidden = false

function natural(){
    let elements = document.querySelectorAll(".nonnatural, .notplural");
    for(let i = 0; i < elements.length; i ++){
        if(!nonnaturalHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    nonnaturalHidden = !nonnaturalHidden

}

let nondidHidden = false

function did(){
    let elements = document.querySelectorAll(".notdid, .notplural");
    for(let i = 0; i < elements.length; i ++){
        if(!nondidHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    nondidHidden = !nondidHidden

}

let notpluralHidden = false

function plural(){
    let elements = document.querySelectorAll(".notplural");
    for(let i = 0; i < elements.length; i ++){
        if(!notpluralHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notpluralHidden = !notpluralHidden
}



let lessImportantHidden = false

function important(){
    let elements = document.querySelectorAll(".less-important");
    for(let i = 0; i < elements.length; i ++){
        if(!lessImportantHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    lessImportantHidden = !lessImportantHidden
}


let notTreatmentHidden = false

function treatment(){
    let elements = document.querySelectorAll(".not-treatment");
    for(let i = 0; i < elements.length; i ++){
        if(!notTreatmentHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notTreatmentHidden = !notTreatmentHidden
}

let notFunctionaltHidden = false

function functional(){
    let elements = document.querySelectorAll(".not-functional");
    for(let i = 0; i < elements.length; i ++){
        if(!notFunctionaltHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notFunctionaltHidden = !notFunctionaltHidden
}


let notNeurotHidden = false

function neuro(){
    let elements = document.querySelectorAll(".not-neuro");
    for(let i = 0; i < elements.length; i ++){
        if(!notNeurotHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notNeurotHidden = !notNeurotHidden
}

let notNewestHidden = false

function newest(){
    let elements = document.querySelectorAll(".older");
    for(let i = 0; i < elements.length; i ++){
        if(!notNewestHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notNewestHidden = !notNewestHidden
}

let notPopularHidden = false

function popular(){
    let elements = document.querySelectorAll(".less-known");
    for(let i = 0; i < elements.length; i ++){
        if(!notPopularHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notPopularHidden = !notPopularHidden
}

let notTulpasHidden = false

function tulpas(){
    let elements = document.querySelectorAll(".not-tulpas");
    for(let i = 0; i < elements.length; i ++){
        if(!notTulpasHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notTulpasHidden = !notTulpasHidden
}

let notPeopleHidden = false

function persons(){
    let elements = document.querySelectorAll(".not-people");
    for(let i = 0; i < elements.length; i ++){
        if(!notPeopleHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notPeopleHidden = !notPeopleHidden
}

let notModelsHidden = false

function models(){
    let elements = document.querySelectorAll(".not-model");
    for(let i = 0; i < elements.length; i ++){
        if(!notModelsHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notModelsHidden = !notModelsHidden
}

let notSwitchingHidden = false

function switching(){
    let elements = document.querySelectorAll(".not-switching");
    for(let i = 0; i < elements.length; i ++){
        if(!notSwitchingHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notSwitchingHidden = !notSwitchingHidden
}

let notPolishHidden = false

function polish(){
    let elements = document.querySelectorAll(".not-polish");
    for(let i = 0; i < elements.length; i ++){
        if(!notPolishHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notPolishHidden = !notPolishHidden
}

let notStigmaHidden = false

function stigma(){
    let elements = document.querySelectorAll(".not-stigma");
    for(let i = 0; i < elements.length; i ++){
        if(!notStigmaHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notStigmaHidden = !notStigmaHidden
}

let notMythsHidden = false

function myths(){
    let elements = document.querySelectorAll(".not-myths");
    for(let i = 0; i < elements.length; i ++){
        if(!notMythsHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notMythsHidden = !notMythsHidden
}

let notLawHidden = false

function law(){
    let elements = document.querySelectorAll(".not-law");
    for(let i = 0; i < elements.length; i ++){
        if(!notLawHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notLawHidden = !notLawHidden
}

let notComorbiditiesHidden = false

function comorbidities(){
    let elements = document.querySelectorAll(".not-comorbidities");
    for(let i = 0; i < elements.length; i ++){
        if(!notComorbiditiesHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notComorbiditiesHidden = !notComorbiditiesHidden
}

let notIIAHidden = false

function iia(){
    let elements = document.querySelectorAll(".not-iia");
    for(let i = 0; i < elements.length; i ++){
        if(!notIIAHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notIIAHidden = !notIIAHidden
}

let notMediumsHidden = false

function mediums(){
    let elements = document.querySelectorAll(".not-mediums");
    for(let i = 0; i < elements.length; i ++){
        if(!notMediumsHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notMediumsHidden = !notMediumsHidden
}

let notReviewedHidden = false

function reviewed(){
    let elements = document.querySelectorAll(".not-reviewed");
    for(let i = 0; i < elements.length; i ++){
        if(!notReviewedHidden){
            elements[i].style.display = "none";
        }
        else{
            elements[i].style.display = "list-item";
        }
    }
    notReviewedHidden = !notReviewedHidden
}







function compare(p1, p2){
    let nr1 = parseInt(p1.dataset.order);
    let nr2 = parseInt(p2.dataset.order);
    if(nr1>nr2){
        return -1;
    }
    if(nr1<nr2){
        return 1;
    }
    return 0;
}

function sortList(){
    let list = document.getElementById("main-list");
    let papers = document.querySelectorAll("#main-list>li");
    papers = Array.prototype.slice.call(papers, 0);
    papers.sort(compare);
    for(let i = 0; i < papers.length; i++){
        list.append(papers[i]);
    }
}


function compareYear(p1, p2){
    let yr1 = parseInt(p1.dataset.year);
    let yr2 = parseInt(p2.dataset.year);
    if(yr1>yr2){
        return -1;
    }
    if(yr1<yr2){
        return 1;
    }
    return 0;
}

function sortYear(){
    let list = document.getElementById("main-list");
    let papers = document.querySelectorAll("#main-list>li");
    papers = Array.prototype.slice.call(papers, 0);
    papers.sort(compareYear);
    for(let i = 0; i < papers.length; i++){
        list.append(papers[i]);
    }
}