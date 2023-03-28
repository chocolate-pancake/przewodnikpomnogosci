document.write(`
<div id="shadow" class="shadow"></div>
<div id="sidebar-shadow" class="shadow"></div>

<a class="to-main" href="#main">Przejdź do zawartości</a>

<header class="header">
    <button class="menu-icon" type="button" onclick="menu()">
        <img src="menu-icon.png" alt="Menu" title="Menu">
    </button>
    <a href="index" class="title">Przewodnik po Mnogości</a>
    <a href="ustawienia" class="settings desktop">
        <img src="settings.png" alt="ustawienia">
    </a>
</header>

<a href="ustawienia" class="settings mobile">
    <img src="settings.png" alt="ustawienia">
</a>

    <aside class="sidebar" id="sidebar">
        <button class="menu-icon" type="button" onclick="menu()">
            <img src="menu-icon.png" alt="Menu" title="Menu">
        </button>
        <nav class="menu-options">
            <a href="index" id="index" class="option">Strona główna</a>    
            <a href="terminologia" id="terminologia" class="option">Terminologia</a>    
            <a href="dysocjacyjne-zaburzenie-tozsamosci" id="dysocjacyjne-zaburzenie-tozsamosci" 
            class="option">Dysocjacyjne zaburzenie tożsamości</a>   
            <a href="system" id="system" class="option">System</a>   
            <a href="powstawanie" id="powstawanie" class="option">Powstawanie</a>    
            <a href="wspolosoby" id="wspolosoby" class="option">Współosoby</a>    
            <a href="wewnetrzny-swiat" id="wewnetrzny-swiat" class="option">Wewnętrzny świat</a> 
            <a href="materiały" id="materialy" class="option">Materiały</a>
        </nav>
    </aside>`)