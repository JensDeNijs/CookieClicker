(() => {
        let totalCookies = 0;
        let autoClicker = 1;
        let clicker=1;
        let htmlTotalCookies = document.getElementById("cookies");


        let intervalId = window.setInterval(function(){
                totalCookies += autoClicker;
                htmlTotalCookies.textContent =totalCookies;
        }, 1000);

        document.getElementById("cookieButton").addEventListener("click",function (){
                totalCookies += clicker;
                htmlTotalCookies.textContent = totalCookies;

        })




})();