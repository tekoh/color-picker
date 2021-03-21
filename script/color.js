let hex
let data

function inputEdit(element) {
    element.value = element.value.toLowerCase()

    if (!element.value.startsWith("#")) {
        element.value = "#" + element.value
    }

    if (element.value.length > 7) {

        if (element.value.startsWith("##")) {
            element.value = element.value.substr(1, 8)
        } else {
            element.value = element.value.substr(0, 7)
        }
    }

    const regex = /[^a-f0-9]/g

    if (element.value.substr(1, 7).match(regex)) {
        element.value = "#" + element.value.replace(regex, "")
    }

    let newHex = element.value.substr(1)

    if (newHex.length == 1) {
        newHex = newHex.repeat(6)
    } else if (newHex.length == 2) {
        newHex = newHex.repeat(3)
    } else if (newHex.length >= 3 && newHex.length != 6) {
        const r = newHex.split("")[0]
        const g = newHex.split("")[1]
        const b = newHex.split("")[2]

        newHex = `${r}${r}${g}${g}${b}${b}`
    } else if (newHex.length == 4) {
        const r = newHex.split("")[0]
        const g = newHex.split("")[1]
        const b = newHex.split("")[2]

        newHex = `${r}${r}${g}${g}${b}${b}`
    }

    if (newHex != "") {
        $("body").css("background-color", "#" + newHex)
        data.addToHistory(`#${newHex}`)
        data.save()
    }

    const luminance = getLuminance("#" + newHex)
    
    hex = "#" + newHex

    window.location.hash = hex

    let saveOpacity = 0

    if (data.isFavourite(hex)) {
        saveOpacity = 100
    }

    if (luminance < 40) {
        $("#color-selector input").css("color", "white")
        $(".button-command svg").css("fill", "white")
        $("header h1").css("color", "white")
        $("#save-button").css("border-bottom-color", `rgb(255, 255, 255, ${saveOpacity})`)
    } else {
        $("#color-selector input").css("color", "black")
        $(".button-command svg").css("fill", "black")
        $("header h1").css("color", "black")
        $("#save-button").css("border-bottom-color", `rgb(0, 0, 0, ${saveOpacity})`)
    }
}

function copyHex() {
    $("#color-selector input").val(hex)
    $("#color-selector input").value = hex
    $("#color-selector input").select()
    document.execCommand("copy")
}

function randomColor() {
    const element = $("#color-selector input")[0]

    element.value = `#${getRandomHex()}`

    inputEdit(element)
}

function getLuminance() {
    let rgb = document.body.style.backgroundColor.substr(4)

    rgb = rgb.substr(0, rgb.length - 1)

    const r = rgb.split(", ")[0]
    const g = rgb.split(", ")[1]
    const b =  rgb.split(", ")[2]

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

    return luma
}

function getRandomHex() {
    
    let a = Math.floor(Math.random() * 16777215).toString(16)

    while (a.length != 6) {
        a = Math.floor(Math.random() * 16777215).toString(16)
    }

    return a
}

function getData() {
    data = Data.fromCookie()
    setTimeout(() => {
        loadSaved(data.favourites)
    }, 500);
    
    return console.log(data)
}

function saveColor() {
    const luminance = getLuminance(`#${hex}`)
    let saveOpacity = 0

    if (data.isFavourite(hex)) {
        data.removeFromFavourites(hex)
        saveOpacity = 0
    } else {
        data.addToFavourites(hex)
        saveOpacity = 100
    }

    data.save()

    if (luminance < 40) {
        $("#save-button").css("border-bottom-color", `rgb(255, 255, 255, ${saveOpacity})`)
    } else {
        $("#save-button").css("border-bottom-color", `rgb(0, 0, 0, ${saveOpacity})`)
    }
}

//totally not copy and pasted from stackoverflow
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

getData()