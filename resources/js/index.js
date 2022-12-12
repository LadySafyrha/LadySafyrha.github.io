let valueWheel = 0;
let iForBG = 1;
let isMain = true;
let isContent = false;
let isContext = false;
let indexContent = 1;
document.addEventListener("wheel", function (e) {
    if (isMain) {
        if (e.deltaY !== 0) {
            if (e.deltaY < 0) {
                if (valueWheel !== 0) {
                    valueWheel += e.deltaY;
                }
            } else {
                valueWheel += e.deltaY;
            }
        }
        let valuePixels = valueWheel * 0.2;
        let pixelsHombre = valuePixels + "px";
        let pixelsMujer0 = -(valuePixels - 300) + "px";
        let pixelsMujer1 = (valuePixels - 620) + "px";
        let pixelsMujer2 = -(valuePixels - 1020) + "px";
        let pixelLogo = (valuePixels - 1560) * -0.01;

        if (valuePixels >= 0 && valuePixels <= 300) {
            document.getElementById("hombre").style.left = pixelsHombre;
        }
        if (valuePixels >= 300 && valuePixels <= 620) {
            document.getElementById("mujer-0").style.left = pixelsMujer0;
        }
        if (valuePixels >= 620 && valuePixels <= 1020) {
            document.getElementById("mujer-1").style.left = pixelsMujer1;
        }
        if (valuePixels >= 1020 && valuePixels <= 1460) {
            document.getElementById("mujer-2").style.backgroundColor = "rgba(255, 255, 255," + iForBG + ")";
            document.getElementById("mujer-2").style.left = pixelsMujer2;
            if (e.deltaY > 0 && iForBG >= 0) {
                iForBG -= e.deltaY * 0.001;
                if (iForBG < 0) { iForBG = 0 };
            }
            else if (e.deltaY < 0 && iForBG <= 1) {
                iForBG -= e.deltaY * 0.001;
                if (iForBG > 1) { iForBG = 1 };
            };
        }
        if (valuePixels >= 1460 && valuePixels <= 1560) {
            document.getElementById('logo').style.transform = "scale(" + pixelLogo
                + ")";
        }
        if (valuePixels >= 1560) {
            const collection = document.getElementsByClassName("image-button");
            for (let i = 0; i < collection.length; i++) {
                collection[i].style.zIndex = "101";
            }
            valueWheel = 7800;
        } if (valuePixels <= 1560 && e.deltaY < 0) {
            const collection = document.getElementsByClassName("image-button");
            for (let i = 0; i < collection.length; i++) {
                collection[i].style.zIndex = "0";
            }
        }
        if (valuePixels <= 1560 && e.deltaY > 0) {
            const collection = document.getElementsByClassName("image-button");
            for (let i = 0; i < collection.length; i++) {
                collection[i].style.zIndex = "94";
            }
        }
    }
    if (isContent) {
        if (e.deltaY > 0) {
            document.getElementById("contenido" + indexContent + "-content").style.zIndex = "0";
            if (indexContent == 2) {
                indexContent = 3;
                document.getElementById("close-button").style.zIndex = "103";
            } else if (indexContent == 1) {
                indexContent = 2;
            }
            document.getElementById("contenido" + indexContent + "-content").style.zIndex = "102";

        } else {
            document.getElementById("contenido" + indexContent + "-content").style.zIndex = "0";
            if (indexContent == 3) {
                document.getElementById("close-button").style.zIndex = "0";
                indexContent = 2;
            } else if (indexContent == 2) {
                indexContent = 1;
            }
            document.getElementById("contenido" + indexContent + "-content").style.zIndex = "102";
        }
    }
    if (isContext) {
        if (e.deltaY > 0) {
            document.getElementById("contexto" + indexContent + "-content").style.zIndex = "0";
            if (indexContent == 2) {
                indexContent = 3;
                document.getElementById("close-button").style.zIndex = "103";
            } else if (indexContent == 1) {
                indexContent = 2;
            }
            document.getElementById("contexto" + indexContent + "-content").style.zIndex = "102";

        } else {
            document.getElementById("contexto" + indexContent + "-content").style.zIndex = "0";
            if (indexContent == 3) {
                document.getElementById("close-button").style.zIndex = "0";
                indexContent = 2;
            } else if (indexContent == 2) {
                indexContent = 1;
            }
            document.getElementById("contexto" + indexContent + "-content").style.zIndex = "102";
        }
    }
    return false

}, true);

function openUsuario() {
    document.getElementById("usuario-content").style.zIndex = "102";
    document.getElementById("close-button").style.zIndex = "103";

    isMain = false;
}

function openContenido() {
    document.getElementById("contenido1-content").style.zIndex = "102";
    isMain = false;
    isContent = true;
}

function openContexto() {
    document.getElementById("contexto1-content").style.zIndex = "102";
    isMain = false;
    isContext = true;
}

function openCreativo() {
    const creativo = document.getElementById("creativo-content");
    const close = document.getElementById("close-button-1");
    creativo.style.zIndex = "102";
    creativo.style.scale = 1;
    document.getElementById("color").style.filter = "brightness(0.4)";
    close.style.zIndex = "103";

    isMain = false;
    console.log("CREATIVO")
}

function openSistema() {
    const sistema = document.getElementById("sistema-content");
    sistema.style.zIndex = "102";
    sistema.style.scale = 1;
    const close = document.getElementById("close-button-2");
    close.style.zIndex = "103";
    close.style.scale = 1;
    isMain = false;
    console.log("SISTEMA")

}

function closeContent() {
    const collection = document.getElementsByClassName("image-content");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.zIndex = "0";
    }
    const close = document.getElementById("close-button")
    close.style.zIndex = "0";
    isMain = true;
    isContent = false;
    indexContent = 1;
    isContext = false;
}

function closeContent1() {
    const collection = document.getElementsByClassName("image-content");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.zIndex = "0";
    }
    const close = document.getElementById("close-button-1");
    const creativo = document.getElementById("creativo-content");
    document.getElementById("color").style.filter = "none";

    creativo.style.scale = 0;
    creativo.style.zIndex = "0";
    close.style.zIndex = "0";
    isMain = true;
    isContent = false;
    indexContent = 1;
    isContext = false;
}

function closeContent2() {
    const collection = document.getElementsByClassName("image-content");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.zIndex = "0";
    }
    const close = document.getElementById("close-button-2");
    document.getElementById("sistema-content").style.scale = 0;
    close.style.zIndex = "0";
    close.style.scale = 0;

    isMain = true;
    isContent = false;
    indexContent = 1;
    isContext = false;
}

