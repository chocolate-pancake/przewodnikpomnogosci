if(!localStorage.getItem('oldMenu') || localStorage.getItem('oldMenu') === 'false'){

    let template;
    let parser = new DOMParser;
    let inserted = false;
    let ready = false;

    function insert(){
        if (document.readyState == "complete" && !inserted && ready) {
            let menu = document.getElementById("sidebar");
            let oldNav = document.querySelector(".menu-options");
            let optionID = oldNav.dataset.id;
            let nav = template.querySelector(".menu-options");
            menu.append(nav);
            inserted = true;
            menu.removeChild(oldNav);
            let option = document.getElementById(optionID);
            let subsection;
            if(option.classList.contains("in-summary")){
                subsection = option.parentElement.parentElement;
            }
            else{
                option.classList.toggle("current");
                subsection = option.parentElement;
            }
            if(subsection.nodeName === 'DETAILS'){
                subsection.classList.toggle("current");
                subsection.open = true;
            }
            let submenu = subsection.parentElement;
            if(submenu.nodeName === 'DETAILS'){
                submenu.classList.toggle("current");
                submenu.open = true;
            }
            option.scrollIntoView({block:"center"});
        }
    }

    async function get_template(){
        let promise = await fetch("/en/template");
        let text = await promise.text();
        template = await parser.parseFromString(text, "text/html");
        ready = true;
        insert()
    }

    get_template();

    document.onreadystatechange = function () {
        insert();
    }

}