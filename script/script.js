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

    if (checkBrightness(element.value)) {
        $("#center input").css("color", "white")
    } else {
        $("#center input").css("color", "black")
    }
    
    $("body").css("background-color", element.value)
}

function checkBrightness(hex) {
    let c = hex.substring(1);      // strip #

    if (c.length == 3) {
        c = `${c.split("")[0]}${c.split("")[0]}${c.split("")[1]}${c.split("")[1]}${c.split("")[2]}${c.split("")[2]}`
    }

    console.log(c)

    const rgb = parseInt(c, 16);   // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >>  8) & 0xff;  // extract green
    const b = (rgb >>  0) & 0xff;  // extract blue

    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    console.log(luma)

    if (luma < 40) {
        return true
    } else {
        return false
    }
}