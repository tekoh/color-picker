let hex

function inputEdit(element) {

    element.value = element.value.toLowerCase()

    if (!element.value.startsWith("#")) {
        element.value = "#" + element.value
    }

    if (element.value.length > 7) {
        element.value = element.value.substr(0, 7)
    }

    const regex = /[^a-f0-9\s]/g

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
    }

    const luminance = getLuminance("#" + newHex)
    
    hex = newHex

    if (luminance < 40) {
        $("#color-selector input").css("color", "white")
        $(".button-command svg").css("fill", "white")
    } else {
        $("#color-selector input").css("color", "black")
        $(".button-command svg").css("fill", "black")
    }
}

function copyHex() {
    $("#color-selector input").select()
    document.execCommand("copy")
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


//totally not copy and pasted from stackoverflow
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }