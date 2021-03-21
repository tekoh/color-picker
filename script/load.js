$(window).on("load", () => {
    $("#color-selector input")[0].selectionStart = $("#color-selector input")[0].selectionEnd = 10000
    $("body").removeClass("preload")

    if (window.location.hash.startsWith("#!")) {
        
        let code = window.location.hash.substr(2, window.location.hash.length)

        console.log(code)

        const name = code.split("&?")[1]

        if (!name) {
            window.location.hash = ""
            return location.reload()
        }

        const background = code.split("&?")[2]

        if (!background) {
            window.location.hash = ""
            return location.reload()
        }

        const colors = code.split("&?")[0].split("!")

        if (colors.length < 3) {
            window.location.hash = ""
            return location.reload()
        }

        console.log(colors)

        for (c of colors) {
            $("#palette-colors-container").append(`<div id="${c.substr(1, 7)}-palette" class="palette-color" style="background-color: ${c}" onclick="showColor('${c}')"><h2 id="${c.substr(1, 7)}-label" class="label" >${c}</p></div>`)
        }

        $("body").css("background-color", background)

        $("#palette-name").text(`${name} palette`)

        setTimeout(() => {
            bindPaletteEvent()
            showPalettePage()
        }, 1700);
        
    } else if (window.location.hash != "") {
        const element = $("#color-selector input")[0]

        element.value = window.location.hash.substr(0, 7)

        inputEdit(element)
    } else {
        const element = $("#color-selector input")[0]

        element.value = `#${getRandomHex()}`

        inputEdit(element)
    }

    $("#color-selector").addClass("fade-in")

    $("#buttons-container").css("display", "none")
    $("header").css("display", "none")

    setTimeout(() => {
        $("#buttons-container").addClass("fade-in")
        $("header").addClass("header-in")
        $("#buttons-container").css("display", "block")
        $("header").css("display", "block")
    }, 500);

    setTimeout(() => {
        $("#buttons-container").removeClass("fade-in")
        $("#color-selector").removeClass("fade-in")
        $("header").removeClass("header-in")
    }, 2000)
})

function loadSaved(saved) {
    for (color of saved) {
        $("#saved-colors-container").append(`<div id="${color.substr(1, 7)}" class="saved-color" style="background-color: ${color}" onclick="showColor('${color}')"><h2 id="${color.substr(1, 7)}-label" class="label" >${color}</p></div>`)
    }

    $("#color-counter").text(saved.length)
    bindSavedEvent()
}

function loadHistory(history) {
    for (color of history) {
        $("#history-colors-container").append(`<div id="${color.substr(1, 7)}-history" class="history-color" style="background-color: ${color}" onclick="showColor('${color}')"><h2 id="${color.substr(1, 7)}-history-label" class="label" >${color}</p></div>`)
    }

    bindHistoryEvent()
}