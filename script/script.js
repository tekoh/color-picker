function inputEdit(element) {
    if (!element.value.startsWith("#")) {
        element.value = "#" + element.value
    }

    if (element.value.length > 7) {
        element.value = element.value.substr(0, 7)
    }

    const regex = /[^A-z0-9\s]/g

    if (element.value.substr(1, 7).match(regex)) {
        element.value = "#" + element.value.replace(regex, "")
    }
    
    $("body").css("background-color", element.value)
}