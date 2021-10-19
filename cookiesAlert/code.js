(function(){
    var cookieAlert = document.querySelector(".cookie-container");
    var cookieButton = document.querySelector(".cookie-container .cookie-alert button");
    var hasCookies = localStorage.getItem('cookies-alert');
    if (!hasCookies) {
        toogleAlert(true);
        cookieButton.addEventListener('click', setCookies);
    }  

    function toogleAlert(show) {
        cookieAlert.style.display = show ? 'block': 'none';
    }

    function setCookies() {
        localStorage.setItem('cookies-alert', true);
        toogleAlert(false);
    }
})();