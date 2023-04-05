
if(!localStorage.getItem('gender')){
    localStorage.setItem('gender', 'unspecified');
}
let chosenGender = localStorage.getItem('gender');

let genders = ['unspecified', 'masculine', 'feminine', 'neutral', 'postgender'];
function pronouns(gender){
    for(x in genders){
        document.documentElement.style.setProperty(`--${genders[x]}`, 'none');
    }
    document.documentElement.style.setProperty(`--${gender}`, 'inline');
    localStorage.setItem('gender', gender);
}

pronouns(chosenGender);
let checked = document.getElementById(chosenGender);
if(checked){
    checked.checked = true;
}

if(!localStorage.getItem('underlineLinks')){
    localStorage.setItem('underlineLinks', 'false');
}
if(localStorage.getItem('underlineLinks') === 'true'){
    underlineLinks();
    let linksCheck = document.getElementById('underlineLinks');
    if(linksCheck){
        linksCheck.checked = true;
    }
}

function link(){
    if(localStorage.getItem('underlineLinks') === 'true'){
        localStorage.setItem('underlineLinks', 'false');
    }
    else{
        localStorage.setItem('underlineLinks', 'true');
    }
    underlineLinks();
}

function underlineLinks(){
    let links = document.querySelectorAll(".internal");
    for(let i  = 0; i < links.length; i ++){
        links[i].classList.toggle("underline");
    }
    links = document.querySelectorAll(".external");
    for(let i  = 0; i < links.length; i ++){
        links[i].classList.toggle("underline");
    }
}


if(!localStorage.getItem('showWarnings')){
    localStorage.setItem('showWarnings', 'true');
}
if(localStorage.getItem('showWarnings') === 'true'){
    let warningsCheck = document.getElementById('showWarnings');
    if(warningsCheck){
        warningsCheck.checked = true;
    }
}
else{
    document.documentElement.style.setProperty("--warning-display", "none");
}

function warnings(){
    if(localStorage.getItem('showWarnings') === 'true'){
        localStorage.setItem('showWarnings', 'false');
        document.documentElement.style.setProperty("--warning-display", "none");
    }
    else{
        localStorage.setItem('showWarnings', 'true');
    }
}

if(!localStorage.getItem('showLanguage')){
    localStorage.setItem('showLanguage', 'true');
}
if(localStorage.getItem('showLanguage') === 'true'){
    let languageCheck = document.getElementById('showLanguage');
    if(languageCheck){
        languageCheck.checked = true;
    }
}
else{
    document.documentElement.style.setProperty("--warning-display", "none");
}

function lang(){
    if(localStorage.getItem('showLanguage') === 'true'){
        localStorage.setItem('showLanguage', 'false');
        document.documentElement.style.setProperty("--neutral-language", "none");
    }
    else{
        localStorage.setItem('showLanguage', 'true');
    }
}

// if(!localStorage.getItem('reducedMotion')){
//     localStorage.setItem('reducedMotion', 'false');
// }
// if(window.matchMedia("(prefers-reduced-motion)").matches){
//     localStorage.setItem('reducedMotion', 'true');
// }

// if(localStorage.getItem('reducedMotion') === 'true'){
//     reduceMotion();
//     let motionCheck = document.getElementById('reducedMotion');
//     if(motionCheck){
//         motionCheck.checked;
//     }
// }

// function reduceMotion(){ //NIE DZIAŁA XC
//     let elements = document.querySelectorAll("*");
//     for(let i = 0; i < elements.length; i ++){
//         elements[i].classList.toggle('reduced-motion');
//     }
//     // document.documentElement.classList.toggle('reduced-motion');
//     if(localStorage.getItem('reducedMotion') === 'true'){
//         localStorage.setItem('reducedMotion', 'false');
//     }
//     else{
//         localStorage.setItem('reducedMotion', 'true');
//     }
// }



if(!localStorage.getItem("fontSize")){
    localStorage.setItem("fontSize", "16px");
}
let currentSize = localStorage.getItem("fontSize");
font(currentSize);
let chosen = document.getElementById(currentSize);
if(chosen){
    chosen.checked = true;
}


function font(size){
    document.documentElement.style.setProperty("--font-size", size);
    localStorage.setItem("fontSize", size);
}