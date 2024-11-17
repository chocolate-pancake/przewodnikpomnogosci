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