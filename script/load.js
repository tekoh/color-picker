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
        $("#color-selector input").removeClass("fade-in")
        $("header").removeClass("header-in")
    }, 2000)
})