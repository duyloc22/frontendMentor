//DOM

const buttons = document.querySelectorAll(".calc-btn");
const deleteBtn = document.querySelector(".calc-del");
const reset = document.querySelector(".calc-reset");
const result = document.querySelector(".calc-result");
const screenDisplay = document.querySelector("#screen");
const themeToggle = document.querySelectorAll(".toggle-btn > div");
const circle = document.querySelector(".circle");

//calculation
screenDisplay.value = "";
for (const button of buttons) {
    button.addEventListener("click", (e) => {
        switch (e.target.textContent) {
            case "0":
                screenDisplay.value += "0";
                break;
            case "1":
                screenDisplay.value += "1";
                break;
            case "2":
                screenDisplay.value += "2";
                break;
            case "3":
                screenDisplay.value += "3";
                break;
            case "4":
                screenDisplay.value += "4";
                break;
            case "5":
                screenDisplay.value += "5";
                break;
            case "6":
                screenDisplay.value += "6";
                break;
            case "7":
                screenDisplay.value += "7";
                break;
            case "8":
                screenDisplay.value += "8";
                break;
            case "9":
                screenDisplay.value += "9";
                break;
            case ".":
                screenDisplay.value += ".";
                break;
            case "+":
                screenDisplay.value += "+";
                break;
            case "-":
                screenDisplay.value += "-";
                break;
            case "x":
                screenDisplay.value += "x";
                break;
            case "/":
                screenDisplay.value += "/";
                break;
            case "DEL":
                screenDisplay.value = screenDisplay.value.slice(0, -1);
                break;
            case "RESET":
                screenDisplay.value = "";
                break;
            case "=":
                if (screenDisplay.value) {
                    screenDisplay.value = screenDisplay.value.replace("x", "*");
                    console.log(screenDisplay.value);
                    screenDisplay.value = eval(screenDisplay.value);
                    break;
                }
        }
    });
}

for (const themeBtn of themeToggle) {
    let theme = localStorage.getItem("theme") || "default";
    if (theme != "default") {
        document.documentElement.setAttribute("data-theme", theme);
        theme == "light" ? (circle.style.left = "35%") : (circle.style.left = "70%");
    } else {
        document.documentElement.removeAttribute("data-theme");
        circle.style.left = "4.5px";
    }
    console.log(theme);
    themeBtn.addEventListener("click", (e) => {
        if (e.target.classList.value == "theme-2") {
            theme = "light";
            circle.style.left = "35%";
        } else if (e.target.classList.value == "theme-3") {
            theme = "dark";
            circle.style.left = "70%";
        } else {
            theme = "default";
            circle.style.left = "4.5px";
        }

        if (theme != "default") {
            document.documentElement.setAttribute("data-theme", theme);
        } else document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", theme);
        console.log(theme);
    });

    console.log(theme);
}

let text =
    "https://hk4e-api-os.mihoyo.com/event/gacha_info/api/getGachaLog?authkey_ver=1&sign_type=2&auth_appid=webview_gacha&init_type=301&gacha_id=c9ab84a4c606b3814afc40cef6adae793fb58c&timestamp=1637712305&lang=vi&device_type=pc&ext=%7B%22loc%22%3A%7B%22x%22%3A-4303.4638671875%2C%22y%22%3A203.2736053466797%2C%22z%22%3A-4208.984375%7D%2C%22platform%22%3A%22WinST%22%7D&game_version=OSRELWin2.3.0_R5102609_S5082883_D5109732&plat_type=pc&region=os_usa&authkey=vymHZVN0mh5uloAmIrGAmmv3WtdPGwuw3nC4A%2FOvtkQD7C3enFiUrAM2sWTkHV%2B%2BoiaYGlp6%2FFYmgPEWQqjvWbzhSn7tmNr6K9XVdlO2WNA64D0UUKMM1aQEB3BxC6meK4Fjhsjn3t9wjwYiMrcWwV%2BeICJpwqWPFyxhSTfjK7Xd87CdXGhlV6DKVXYzNqVCoKyIjKUKhF7sMNkBGjgkd59DOFhYS337ATDqxENTMdRO1qyHm1vIiw55nAL8GdWr71KPiMi1MgGfF2CuC0BJC6k4D4%2BaoK%2Fs%2FAmrvHMRLccSI6eI756ILOyqgcsJ%2FmrD800MphCiK4DTCsW6rcndQYhc3ssCqsD0J1PPsK7sBpuhVBZ%2FGOJP72JQUQ%2B0LFOAbqoQ8417ce19nPDChu2mzySfPXUA%2FVEx%2B8beKfF%2BsgPMmQ%2BdEYkrMAG4k39zfaFCr%2FpDFiQ%2B%2BcJGSn9j8HNpRdJeS1g84%2FGLcwfZdqCsJ6Jz3Dj2%2FcrIXYCUT99oispe6PlZ8syxDZ2zGtugabqLl9v2u4sZ20ED3RZuiXFR%2BdXO%2B2Q%2BVcVwWF3%2FeHHYHfr%2Bgbj%2FKZkGh9Q%2BSyH7xQgXipy75nUEK%2BIgkcRjTe%2BvzSja7gb4YjxOzyiNkp0hkC2TvCP5wRCVrZus09Ccrkxthhhfqlt2%2F0K6gjZXfpHX973o3h5MpXh5EsilM9NRPVZdEGZpTEb5o6JxxCQ6CgXyYaUEcsLSeTFZqJkBHtRZYPHgVRXiSP1QzkDzfpg%2FqNOMeznzKcSMxQuWgAWqch5ECqDjhMf3wfUrfvIDEglt8XeGXD9VKahvVTc8Wsl%2B7u11ddwTC2cnjrcO0U97LO%2FgQAO20QUuWR1Xo1mCAvZalbZeYHpe3Jq6q5W7VkIBJPaFeRhUjxiKuycyVAuGCzzvh%2ByGMiYGnWf9aH5hnUdurg5v1TWsQdJ%2BfGWT53tzkwhcqO5xneVyYGLoOSZ4zDZ9H%2FqcDlcys5mv6R22rgdkLivF4e0hhAvh%2FAA1fzKantw518vCGmfwRkGv23IfZlz6HK2xbnpc4MZjxnviMsnlnxz08nfUDIwA1ZHLDpkneSoZ4OnslIoO8lO1wRMyNM%2BVy2tAS%2BRa%2BomEYg8yEx9Pn%2BQoX8OvK57AduMRWkHZumfX7c8RRzzYZypzqYDWYZb6R%2Bo6bvA5ZzERlGo4GDQJgSS5Nm%2BMYoEFW6nhNCO3U7MsYWH8imuVRw3dXAWx3rHg1p4MNheeBlG%2BxG9q8Eg1o3FK88r7nSp%2B7as2Rhloa17T91er81q04iQOH1Yo%2B%2BcQM6kMjw%2BrrMuWUNC%2BUzTOheXe2VJ2gtmoBGg5dmOIqQu2bwJyeXYmURNhapGoO863Kg%3D%3D&game_biz=hk4e_global&gacha_type=200&page=1&size=20";
async function fetchText() {
    let response = await fetch(text);
    let data = await response.text();
    console.log(data);
}
fetchText();
