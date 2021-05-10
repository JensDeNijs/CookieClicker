(() => {
    let totalCookies = 0;
    let autoClicker = 1;
    let clicker = 1;

    let clickerMultiplier = 1.2;
    let clickerUpgrade = 100;

    let autoClickerMultiplier = 1.2;
    let autoClickerUpgrade = 100;

    let htmlTotalCookies = document.getElementById("cookies");
    let htmlPerSec = document.getElementById("perSec");
    let htmlClickerUpgrade = document.getElementById("clickerUpgrade");
    let htmlBuyClick = document.getElementById("buyClick");
    let htmlAutoClickerUpgrade = document.getElementById("autoClickerUpgrade");
    let htmlAutoBuyClick = document.getElementById("buyAutoClick");
    let htmlPerClick = document.getElementById("perClick");

    htmlPerSec.value = autoClicker;
    htmlClickerUpgrade.value = clickerMultiplier;
    htmlBuyClick.value = clickerUpgrade;
    htmlAutoClickerUpgrade.value = autoClickerMultiplier
    htmlAutoBuyClick.value = autoClickerUpgrade;
    htmlTotalCookies.value = totalCookies
    htmlPerClick.value= clicker

    window.setInterval(function () {
        totalCookies += autoClicker;
        totalCookies = roundOneDec(totalCookies);
        htmlTotalCookies.textContent = totalCookies;

    }, 1000);

    document.getElementById("cookieButton").addEventListener("click", function () {
        totalCookies += clicker;
        totalCookies = roundOneDec(totalCookies );
        htmlTotalCookies.textContent = totalCookies;

    })

    document.getElementById("btnClickerUpgrade").addEventListener("click", function () {
        if ((totalCookies - clickerUpgrade) > 0) {

            totalCookies = roundOneDec (totalCookies - clickerUpgrade);
            clickerUpgrade = roundOneDec(clickerUpgrade ) ;
            clicker = roundOneDec(clicker * 1.2) ;

            htmlBuyClick.textContent = clickerUpgrade;
            htmlClickerUpgrade.value = roundOneDec(clicker * 1.2) ;
            htmlPerClick.textContent = clicker;
            htmlTotalCookies.textContent = totalCookies;
        }
    })

    document.getElementById("btnAutoClickerUpgrade").addEventListener("click", function () {
        if ((totalCookies - autoClickerUpgrade) > 0) {
            totalCookies = roundOneDec(totalCookies - autoClickerUpgrade) ;
            autoClickerUpgrade = roundOneDec(autoClickerUpgrade * 1.3);
            autoClicker = roundOneDec(autoClicker * 1.2) ;

            htmlPerSec.textContent = autoClicker;
        }
    })

    function roundOneDec (x){
        return(Math.round((x) * 10) / 10);

    }
})();