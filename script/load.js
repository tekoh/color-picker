$(window).on("load", () => {
    $("#color-selector input")[0].selectionStart = $("#color-selector input")[0].selectionEnd = 10000
    $("body").removeClass("preload")

    if (window.location.hash != "") {
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