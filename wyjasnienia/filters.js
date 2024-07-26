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