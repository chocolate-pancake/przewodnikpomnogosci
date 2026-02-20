
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
    let links = document.querySelectorAll(".internal, .external, .titleLink");
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
        document.documentElement.style.setProperty("--warning-display", "block");
    }
}

if(!localStorage.getItem('showScrollbar')){
    localStorage.setItem('showScrollbar', 'true');
}
if(localStorage.getItem('showScrollbar') === 'true'){
    let scrollbarCheck = document.getElementById('showScrollbar');
    if(scrollbarCheck){
        scrollbarCheck.checked = true;
    }
}
else{
    document.documentElement.style.setProperty("--scrollbar-width", "none");
    document.documentElement.style.setProperty("--web-scrollbar-width", "0");
}

function scrollbar(){
    if(localStorage.getItem('showScrollbar') === 'true'){
        localStorage.setItem('showScrollbar', 'false');
        document.documentElement.style.setProperty("--scrollbar-width", "none");
        document.documentElement.style.setProperty("--web-scrollbar-width", "0");
    }
    else{
        localStorage.setItem('showScrollbar', 'true');
        document.documentElement.style.setProperty("--scrollbar-width", "0.75rem");
        document.documentElement.style.setProperty("--web-scrollbar-width", "0.75rem");
    }
}

if(!localStorage.getItem('reducedMotion')){
    if(window.matchMedia("(prefers-reduced-motion)").matches){
        localStorage.setItem('reducedMotion', 'true');
    }
    else{
        localStorage.setItem('reducedMotion', 'false');
    }
}

if(localStorage.getItem('reducedMotion') === 'true'){
    unanimate();
    let motionCheck = document.getElementById('reducedMotion');
    if(motionCheck){
        motionCheck.checked = false;
    }
}
else if(localStorage.getItem('reducedMotion') === 'false'){
    let motionCheck = document.getElementById('reducedMotion');
    if(motionCheck){
        motionCheck.checked = true;
    }
}

function reduceMotion(){ 
    unanimate();
    if(localStorage.getItem('reducedMotion') === 'true'){
        localStorage.setItem('reducedMotion', 'false');
    }
    else{
        localStorage.setItem('reducedMotion', 'true');
    }
}

function unanimate(){ 
    let elements = document.querySelectorAll("*");
    for(let i = 0; i < elements.length; i ++){
        elements[i].classList.toggle('reduced-motion');
    }
}



if(!localStorage.getItem("fontSize")){
    localStorage.setItem("fontSize", "unset");
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



if(!localStorage.getItem('oldMenu')){
    localStorage.setItem('oldMenu', 'false');
}

if(localStorage.getItem('oldMenu') === 'true'){
    let menuCheck = document.getElementById('oldMenu');
    if(menuCheck){
        menuCheck.checked = true;
    }
}

function oldMenu(){
    if(localStorage.getItem('oldMenu') === 'true'){
        localStorage.setItem('oldMenu', 'false');
    }
    else{
        localStorage.setItem('oldMenu', 'true');
    }
}


if(!localStorage.getItem('coloredText')){
    localStorage.setItem('coloredText', 'true');
}

if(localStorage.getItem('coloredText') === 'false'){
    let colorCheck = document.getElementById('coloredText');
    if(colorCheck){
        colorCheck.checked = false;
    }
    let texts = document.querySelectorAll(".colored-font");
    for(let i = 0; i < texts.length; i ++){
        texts[i].style.color = "inherit";
    }
}

function coloredText(){
    if(localStorage.getItem('coloredText') === 'true'){
        localStorage.setItem('coloredText', 'false');
    }
    else{
        localStorage.setItem('coloredText', 'true');
    }
}