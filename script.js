(() => {
    //Setting up the page
    let totalCookies = 0;
    let autoClicker = 1;
    let clicker = 1;

    let htmlTotalCookies = document.getElementById("cookies");
    let htmlPerSec = document.getElementById("perSec");
    let htmlPerClick = document.getElementById("perClick");

    htmlPerSec.textContent = autoClicker;
    htmlTotalCookies.textContent = totalCookies;
    htmlPerClick.textContent = clicker;


    //variables for the Clicker upgrade
    let clickerMultiplier = 1.2;
    let clickerUpgrade = 20;
    let htmlClickerUpgrade = document.getElementById("clickerUpgrade");
    let htmlBuyClick = document.getElementById("buyClick");
    htmlClickerUpgrade.textContent = clickerMultiplier;
    htmlBuyClick.textContent = clickerUpgrade;

    //Variables for the first AutoUpgrade
    let autoClickerMultiplier = 1.2;
    let autoClickerUpgrade = 20;
    let htmlAutoClickerUpgrade = document.getElementById("autoClickerUpgrade");
    let htmlAutoBuyClick = document.getElementById("buyAutoClick");
    htmlAutoClickerUpgrade.textContent = autoClickerMultiplier
    htmlAutoBuyClick.textContent = autoClickerUpgrade;

    //Variables for the second AutoUpgrade
    let autoClickerMultiplier2 = 1.3;
    let autoClickerUpgrade2 = 100;
    let htmlAutoClickerUpgrade2 = document.getElementById("autoClickerUpgrade2");
    let htmlAutoBuyClick2 = document.getElementById("buyAutoClick2");
    htmlAutoClickerUpgrade2.textContent = autoClickerMultiplier2;
    htmlAutoBuyClick2.textContent = autoClickerUpgrade2;

    //Variables for the third AutoUpgrade
    let autoClickerMultiplier3 = 1.4;
    let autoClickerUpgrade3 = 300;
    let htmlAutoClickerUpgrade3 = document.getElementById("autoClickerUpgrade3");
    let htmlAutoBuyClick3 = document.getElementById("buyAutoClick3");
    htmlAutoClickerUpgrade3.textContent = autoClickerMultiplier3;
    htmlAutoBuyClick3.textContent = autoClickerUpgrade3;



    //function for Autocounter
    window.setInterval(function () {
        totalCookies += autoClicker;
        totalCookies = roundOneDec(totalCookies);
        htmlTotalCookies.textContent = totalCookies;
    }, 1000);


    //CookieClicker
    document.getElementById("cookieButton").addEventListener("click", function () {
        totalCookies += clicker;
        totalCookies = roundOneDec(totalCookies);
        htmlTotalCookies.textContent = totalCookies;
    })

    //Cookieclick shop item
    document.getElementById("btnClickerUpgrade").addEventListener("click", function () {
        if ((totalCookies - clickerUpgrade) > 0) {

            totalCookies = roundOneDec(totalCookies - clickerUpgrade);
            clickerUpgrade = Math.round(clickerUpgrade * 1.2);
            clicker = roundOneDec(clicker * 1.2);

            htmlBuyClick.textContent = clickerUpgrade;
            htmlClickerUpgrade.value = roundOneDec(clicker * 1.2);
            htmlPerClick.textContent = clicker;
            htmlTotalCookies.textContent = totalCookies;
        }
    })

    //First AutoShopItem
    document.getElementById("btnAutoClickerUpgrade").addEventListener("click", function () {

        autoClickerUpgrade = shopItem(autoClickerUpgrade, autoClickerMultiplier,  htmlAutoBuyClick, htmlAutoClickerUpgrade);
    })

    //Second AutoShopItem
    document.getElementById("btnAutoClickerUpgrade2").addEventListener("click", function () {

        autoClickerUpgrade2 = shopItem(autoClickerUpgrade2, autoClickerMultiplier2, htmlAutoBuyClick2, htmlAutoClickerUpgrade2);
    })

    //Third AutoShopItem
    document.getElementById("btnAutoClickerUpgrade3").addEventListener("click", function () {

        autoClickerUpgrade3 = shopItem(autoClickerUpgrade3, autoClickerMultiplier3, htmlAutoBuyClick3, htmlAutoClickerUpgrade3);
    })






    //Function for automating the shopProcess
    function shopItem(upgraderCost, multiplier, htmlCost, htmlShopAutoclicker) {

        if ((totalCookies - upgraderCost) >= 0) {

            totalCookies = roundOneDec(totalCookies - upgraderCost);
            upgraderCost = roundOneDec(upgraderCost * multiplier);
            autoClicker = roundOneDec(autoClicker * multiplier);

            htmlCost.textContent = upgraderCost;
            htmlPerSec.textContent = autoClicker;
            htmlShopAutoclicker.textContent = roundOneDec(autoClicker * multiplier);
            htmlTotalCookies.textContent = totalCookies;

            return upgraderCost;
        } else {
            return upgraderCost;
        }
    }

    //function to round to 0.1
    function roundOneDec(x) {
        return (Math.round((x) * 10) / 10);
    }


})();