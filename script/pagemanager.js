function hideHome() {
    $("#color-selector").addClass("fade-out")
    $("header").addClass("header-out")
    $("#buttons-container").addClass("fade-out")

    setTimeout(() => {
        $("#color-selector").css("display", "none")
        $("#color-selector").removeClass("fade-out")
        $("#buttons-container").css("display", "none")
        $("#buttons-container").removeClass("fade-out")
    }, 600);
}

function showHomeButton() {
    $("#saved-button").css("display", "none")
    $("#history-button").css("display", "none")

    $("#home-button").css("display", "inline-block")

    $("header").removeClass("header-out")
    $("header").addClass("header-in")

    setTimeout(() => {
        $("header").removeClass("header-in")
    }, 1500);
}

function showHomePage() {
    $(".menu").addClass("fade-out")

    setTimeout(() => {
        $(".menu").css("display", "none")
        $(".menu").removeClass("fade-out")

        $(".menu").css("display", "none")
        $(".menu").removeClass("fade-out")
    }, 600);


    $("header").addClass("header-out")

    $("#color-selector").addClass("fade-in")
    $("#color-selector").css("display", "block")

    setTimeout(() => {
        $("#color-selector").removeClass("fade-in")
    }, 1200);

    setTimeout(() => {
        $("#buttons-container").addClass("fade-in")
        $("#buttons-container").css("display", "block")

        setTimeout(() => {
            $("#buttons-container").removeClass("fade-in")
        }, 1200);
    }, 200);

    setTimeout(() => {
        $("#home-button").css("display", "none")
        $("#saved-button").css("display", "inline-block")
        $("#history-button").css("display", "inline-block")

        $("header").removeClass("header-out")
        $("header").addClass("header-in")
        
        setTimeout(() => {
            $("header").removeClass("header-in")
        }, 1500);
    }, 500);
}

function showSavePage() {
    hideHome()
    setTimeout(() => {
        showHomeButton()
    }, 500);
    
    $("#saved-menu").addClass("fade-in")
    $("#saved-menu").css("display", "block")

    setTimeout(() => {
        $("#saved-menu").removeClass("fade-in")
    }, 1200);
}

function showHistoryPage() {
    hideHome()
    setTimeout(() => {
        showHomeButton()
    }, 500);

    $("#history-menu").addClass("fade-in")
    $("#history-menu").css("display", "block")

    setTimeout(() => {
        $("#history-menu").removeClass("fade-in")
    }, 1200);
}