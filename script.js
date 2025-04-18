let doc = document.getElementById('main');
let sidebarShadow = document.getElementById("sidebar-shadow");

// let page = document.getElementById("page");
// if(page){
//     document.getElementById(page.textContent).classList.toggle("current");
//     document.getElementById(page.textContent).scrollIntoView();

    // let sections = document.querySelectorAll("h2");
    // let anchors = [];
    // anchors[sections.length - 1] = document.createElement('a');
    // anchors[sections.length - 1].setAttribute("href", "#" + sections[sections.length - 1].firstChild.id);
    // anchors[sections.length - 1].setAttribute("class", "option subsection");
    // anchors[sections.length - 1].append(sections[sections.length - 1].textContent);
    // document.getElementById(page.textContent).after(anchors[sections.length - 1]);
    // for(let i = sections.length - 1; i >= 0; i --){
    //     anchors[i] = document.createElement('a');
    //     anchors[i].setAttribute("href", "#" + sections[i].firstChild.id);
    //     anchors[i].setAttribute("class", "option subsection");
    //     anchors[i].append(sections[i].textContent);
    //     document.getElementById(page.textContent).after(anchors[i]);
   // }
// }


sidebarShadow.addEventListener('click', menu);
document.addEventListener("keydown", checkKey);


function checkKey(key){
    if(key.code === "Escape"){
        if(key.repeat){
            window.location.replace("https://google.com");
        }
        // if(escaped === false){
        //     exit();
        //     return;
        // }
        if(sidebar.classList.contains("open")){
            menu();
            return;
        }
    }
    // if(key.code === "ArrowRight" && !escaped){
    //     skipForward();
    //     return;
    // }
}



let sidebar = document.getElementById('sidebar');

let menuI = 1;

function menu() {
    sidebar.classList.toggle('open');
    sidebarShadow.classList.toggle('visible');
    if(menuI){
        setTimeout(function(){document.getElementById('menu2').focus();}, 250);
        menuI = 0;
    }
    else {
        setTimeout(function(){document.getElementById('menu1').focus();}, 250);
        menuI = 1;
    }
}

let current = document.querySelector(".current");
try{
    if(current){
        current.scrollIntoViewIfNeeded();
    }
}
catch {
    if(current){
        current.scrollIntoView();
    }
}


function showSearchInput(){
    let form = document.querySelector("form.search");
    form.classList.toggle("shown");
    if(form.classList.contains("shown")){
        let input = document.querySelector("input.search");
        input.focus();
    }
}


if(window.location.href != "https://przewodnikpomnogosci.pl/404"){
    let lang = document.querySelector("html").getAttribute("lang");
    localStorage.setItem("lang", lang);
}




console.log("Jeżeli chcesz zajrzeć do kodu źródłowego, znajdziesz go tu: https://github.com/chocolate-pancake/przewodnikpomnogosci")