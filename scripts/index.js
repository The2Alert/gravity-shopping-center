(function() {
    var search = document.querySelector("body > .search");
    var link = document.querySelector("header nav > .search");
    var close = document.querySelector("body > .search .close");
    function show() {
        search.classList.remove("hide");
    }
    function hide() {
        search.classList.add("hide");
    }
    link.addEventListener("click", show);
    close.addEventListener("click", hide);
})();