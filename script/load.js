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
})