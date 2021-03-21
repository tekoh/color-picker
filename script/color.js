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
        if (!data.isInHistory(`#${newHex}`)) {
            data.addToHistory(`#${newHex}`)
            data.save()
            $("#history-colors-container").prepend(`<div id="${newHex}-history" class="history-color" style="background-color: #${newHex}" onclick="showColor('#${newHex}')"><h2 id="${newHex}-history-label" class="label" >#${newHex}</p></div>`)
            bindHistoryEvent()
        }
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
        $("h1").css("color", "white")
        $("p").css("color", "white")
        $("#save-button").css("border-bottom-color", `rgb(255, 255, 255, ${saveOpacity})`)
    } else {
        $("#color-selector input").css("color", "black")
        $(".button-command svg").css("fill", "black")
        $("h1").css("color", "black")
        $("p").css("color", "black")
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
        loadSaved(data.getFavourites())
        loadHistory(data.getHistory())
    }, 500);
    
    return console.log(data)
}

function saveColor() {
    const luminance = getLuminance(`#${hex}`)
    let saveOpacity = 0

    if (data.isFavourite(hex)) {
        data.removeFromFavourites(hex)
        saveOpacity = 0
        $(hex).remove()
    } else {
        if (data.getFavourites().length == 100) {

            if ($("#max-saved").hasClass("fade-in") || $("#max-saved").hasClass("fade-out") || $("#max-saved").css("display") == "block") {
                return
            }
            
            $("#max-saved").addClass("fade-in")
            $("#max-saved").css("display", "block")
            
            setTimeout(() => {
                $("#max-saved").removeClass("fade-in")
                $("#max-saved").addClass("fade-out")

                setTimeout(() => {
                    $("#max-saved").css("display", "none")
                    $("#max-saved").removeClass("fade-out")
                }, 600);
            }, 2000);
            return
        }
        data.addToFavourites(hex)
        saveOpacity = 100
        $("#saved-colors-container").prepend(`<div id="${hex.substr(1, 7)}" class="saved-color" style="background-color: ${hex}" onclick="showColor('${hex}')"></div>`)
        bindSavedEvent()
    }

    data.save()

    if (luminance < 40) {
        $("#save-button").css("border-bottom-color", `rgb(255, 255, 255, ${saveOpacity})`)
    } else {
        $("#save-button").css("border-bottom-color", `rgb(0, 0, 0, ${saveOpacity})`)
    }

    $("#color-counter").text(data.getFavourites().length)
    bindSavedEvent()
}

function clearFavourites() {
    data.deleteAllFavourites()
    data.save()
    $("#saved-colors-container").empty()
    $("#color-counter").text("0")
}

function showColor(color) {
    const element = $("#color-selector input")[0]

    element.value = color

    inputEdit(element)
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