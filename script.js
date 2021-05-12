(() => {
    //Setting up the page
    let totalCookies = 0;
    let autoClicker = 0;
    let clicker = 1;

    let htmlTotalCookies = document.getElementById("cookies");
    let htmlPerSec = document.getElementById("perSec");
    let htmlPerClick = document.getElementById("perClick");

    htmlPerSec.textContent = autoClicker;
    htmlTotalCookies.textContent = totalCookies;
    htmlPerClick.textContent = clicker;


    //Variables for the Clicker upgrade
    let clickerMultiplier = 1.2;
    let clickerUpgrade = 20;
    let counter = 0;
    let htmlClickerUpgrade = document.getElementById("clickerUpgrade");
    let htmlBuyClick = document.getElementById("buyClick");
    let upgradesBought = document.getElementById("upgradesBought")
    htmlClickerUpgrade.textContent = clickerMultiplier;
    htmlBuyClick.textContent = clickerUpgrade;

    //Variables for the first AutoUpgrade
    let autoClickerMultiplier = 1.5;
    let autoClickerUpgrade = 50;
    let autoCounter = 0;
    let htmlAutoClickerUpgrade = document.getElementById("autoClickerUpgrade");
    let htmlAutoBuyClick = document.getElementById("buyAutoClick");
    let autoUpgradesBought = document.getElementById("autoUpgradesBought")
    htmlAutoClickerUpgrade.textContent = autoClickerMultiplier
    htmlAutoBuyClick.textContent = autoClickerUpgrade;

    //Variables for the second AutoUpgrade
    let autoClickerMultiplier2 = 1.5;
    let autoClickerUpgrade2 = 250;
    let autoCounter2 = 0;
    let htmlAutoClickerUpgrade2 = document.getElementById("autoClickerUpgrade2");
    let htmlAutoBuyClick2 = document.getElementById("buyAutoClick2");
    let autoUpgradesBought2 = document.getElementById("autoUpgradesBought2")
    htmlAutoClickerUpgrade2.textContent = autoClickerMultiplier2;
    htmlAutoBuyClick2.textContent = autoClickerUpgrade2;

    //Variables for the third AutoUpgrade
    let autoClickerMultiplier3 = 1.5;
    let autoClickerUpgrade3 = 4000;
    let autoCounter3 = 0;
    let htmlAutoClickerUpgrade3 = document.getElementById("autoClickerUpgrade3");
    let htmlAutoBuyClick3 = document.getElementById("buyAutoClick3");
    let autoUpgradesBought3 = document.getElementById("autoUpgradesBought3")
    htmlAutoClickerUpgrade3.textContent = autoClickerMultiplier3;
    htmlAutoBuyClick3.textContent = autoClickerUpgrade3;

    //Variables for the third AutoUpgrade
    let autoClickerMultiplier4 = 1.5;
    let autoClickerUpgrade4 = 35000;
    let autoCounter4 = 0;
    let htmlAutoClickerUpgrade4 = document.getElementById("autoClickerUpgrade4");
    let htmlAutoBuyClick4 = document.getElementById("buyAutoClick4");
    let autoUpgradesBought4 = document.getElementById("autoUpgradesBought4")
    htmlAutoClickerUpgrade4.textContent = autoClickerMultiplier4;
    htmlAutoBuyClick4.textContent = autoClickerUpgrade4;


    //Function for Autocounter
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
        if ((totalCookies - clickerUpgrade) >= 0) {

            totalCookies = roundOneDec(totalCookies - clickerUpgrade);
            clickerUpgrade = Math.round(clickerUpgrade * clickerMultiplier*1.2);
            clicker = roundOneDec(clicker * clickerMultiplier);


            htmlBuyClick.textContent = clickerUpgrade;
            htmlClickerUpgrade.textContent = roundOneDec(clicker * clickerMultiplier);
            htmlPerClick.textContent = clicker;
            htmlTotalCookies.textContent = totalCookies;
            counter += 1;
            upgradesBought.textContent =  "["+counter+"]";


        }
    })

    //First AutoShopItem
    document.getElementById("btnAutoClickerUpgrade").addEventListener("click", function () {
        if ((totalCookies - autoClickerUpgrade) >= 0) {
        if (autoClicker === 0){
            autoClicker = 1
            totalCookies -= autoClickerUpgrade
            autoCounter += 1
            autoUpgradesBought.textContent = "[" + autoCounter + "]";
            htmlPerSec.textContent = autoClicker;
        }else {

                autoClickerUpgrade = shopItem(autoClickerUpgrade, autoClickerMultiplier, htmlAutoBuyClick, htmlAutoClickerUpgrade);
                autoClickerMultiplier = (autoClickerMultiplier - 1) * 0.8 + 1;
                autoCounter += 1
                autoUpgradesBought.textContent = "[" + autoCounter + "]";
            }
        }
    })

    //Second AutoShopItem
    document.getElementById("btnAutoClickerUpgrade2").addEventListener("click", function () {
        if ((totalCookies - autoClickerUpgrade2) >= 0) {
            autoClickerUpgrade2 = shopItem(autoClickerUpgrade2, autoClickerMultiplier2, htmlAutoBuyClick2, htmlAutoClickerUpgrade2);
            autoClickerMultiplier2 = (autoClickerMultiplier2 - 1) * 0.8 + 1;
            autoCounter2 += 1
            autoUpgradesBought2.textContent = "[" + autoCounter2 + "]";
        }
    })

    //Third AutoShopItem
    document.getElementById("btnAutoClickerUpgrade3").addEventListener("click", function () {
        if ((totalCookies - autoClickerUpgrade3) >= 0) {
            autoClickerUpgrade3 = shopItem(autoClickerUpgrade3, autoClickerMultiplier3, htmlAutoBuyClick3, htmlAutoClickerUpgrade3);
            autoClickerMultiplier3 = (autoClickerMultiplier3 - 1) * 0.8 + 1;
            autoCounter3 += 1
            autoUpgradesBought3.textContent = "[" + autoCounter3 + "]";
        }
    })

    //Fourth AutoShopItem
    document.getElementById("btnAutoClickerUpgrade4").addEventListener("click", function () {
        if ((totalCookies - autoClickerUpgrade4) >= 0) {
            autoClickerUpgrade4 = shopItem(autoClickerUpgrade4, autoClickerMultiplier4, htmlAutoBuyClick4, htmlAutoClickerUpgrade4);
            autoClickerMultiplier4 = (autoClickerMultiplier4 - 1) * 0.8 + 1;
            autoCounter4 += 1
            autoUpgradesBought4.textContent = "[" + autoCounter4 + "]";
        }
    })


    //Function for automating the shopProcess
    function shopItem(upgraderCost, multiplier, htmlCost, htmlShopAutoclicker) {

        if ((totalCookies - upgraderCost) >= 0) {

            totalCookies = roundOneDec(totalCookies - upgraderCost);
            upgraderCost = roundOneDec(upgraderCost * multiplier);
            autoClicker = roundOneDec(autoClicker * multiplier);

            htmlCost.textContent = upgraderCost;
            //htmlShopAutoclicker.textContent = roundOneDec(autoClicker * multiplier);
            shipAutoChanges();

            htmlPerSec.textContent = autoClicker;
            htmlTotalCookies.textContent = totalCookies;

            return upgraderCost;
        } else {
            return upgraderCost;
        }
    }

    //Alters the html automatically for each shopItem
    function shipAutoChanges() {
        htmlAutoClickerUpgrade.textContent = roundOneDec(autoClicker * autoClickerMultiplier);
        htmlAutoClickerUpgrade2.textContent = roundOneDec(autoClicker * autoClickerMultiplier2);
        htmlAutoClickerUpgrade3.textContent = roundOneDec(autoClicker * autoClickerMultiplier3);
        htmlAutoClickerUpgrade4.textContent = roundOneDec(autoClicker * autoClickerMultiplier4);
    }

    //function to round to 0.1
    function roundOneDec(x) {
        return (Math.round((x) * 10) / 10);
    }


})();