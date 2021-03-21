function bindSavedEvent() {
    $(".saved-color").unbind().hover(event => {
        event.preventDefault()

        const id = event.currentTarget.id

        const rgb = parseInt(id, 16);   // convert rrggbb to decimal
        const r = (rgb >> 16) & 0xff;  // extract red
        const g = (rgb >>  8) & 0xff;  // extract green
        const b = (rgb >>  0) & 0xff;  // extract blue

        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        if (luma < 40) {
            $(`#${id}-label`).css("color", "white")
        } else {
            $(`#${id}-label`).css("color", "black")
        }

        $(`#${id}-label`).css("opacity", "100%")
    }, event => {
        event.preventDefault()

        const id = event.currentTarget.id

        if ($(`#${id}-label`).attr("data-keep") == "true") return

        $(`#${id}-label`).css("opacity", "0%")
    })

    $(".saved-color").on("click", event => {
        event.preventDefault()

        const id = event.currentTarget.id

        const rgb = parseInt(id, 16);   // convert rrggbb to decimal
        const r = (rgb >> 16) & 0xff;  // extract red
        const g = (rgb >>  8) & 0xff;  // extract green
        const b = (rgb >>  0) & 0xff;  // extract blue

        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        if (luma < 40) {
            $(`#${id}-label`).css("color", "white")
        } else {
            $(`#${id}-label`).css("color", "black")
        }

        $(`#${id}-label`).css("opacity", "100%")

        $(`#${id}-label`).attr("data-keep", "true")

        setTimeout(() => {
            $(`#${id}-label`).css("opacity", "0%")
            $(`#${id}-label`).attr("data-keep", "false")
        }, 5000);
    })
}

function bindHistoryEvent() {
    $(".history-color").unbind().hover(event => {
        event.preventDefault()

        const id = event.currentTarget.id

        const rgb = parseInt(id, 16);   // convert rrggbb to decimal
        const r = (rgb >> 16) & 0xff;  // extract red
        const g = (rgb >>  8) & 0xff;  // extract green
        const b = (rgb >>  0) & 0xff;  // extract blue

        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        if (luma < 40) {
            $(`#${id}-label`).css("color", "white")
        } else {
            $(`#${id}-label`).css("color", "black")
        }

        $(`#${id}-label`).css("opacity", "100%")
    }, event => {
        event.preventDefault()

        const id = event.currentTarget.id

        if ($(`#${id}-label`).attr("data-keep") == "true") return

        $(`#${id}-label`).css("opacity", "0%")
    })

    $(".history-color").on("click", event => {
        event.preventDefault()

        const id = event.currentTarget.id

        const rgb = parseInt(id, 16);   // convert rrggbb to decimal
        const r = (rgb >> 16) & 0xff;  // extract red
        const g = (rgb >>  8) & 0xff;  // extract green
        const b = (rgb >>  0) & 0xff;  // extract blue

        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        if (luma < 40) {
            $(`#${id}-label`).css("color", "white")
        } else {
            $(`#${id}-label`).css("color", "black")
        }

        $(`#${id}-label`).css("opacity", "100%")

        $(`#${id}-label`).attr("data-keep", "true")

        setTimeout(() => {
            $(`#${id}-label`).css("opacity", "0%")
            $(`#${id}-label`).attr("data-keep", "false")
        }, 5000);
    })
}

function bindPaletteEvent() {
    $(".palette-color").unbind().hover(event => {
        event.preventDefault()

        const id = event.currentTarget.id

        const rgb = parseInt(id, 16);   // convert rrggbb to decimal
        const r = (rgb >> 16) & 0xff;  // extract red
        const g = (rgb >>  8) & 0xff;  // extract green
        const b = (rgb >>  0) & 0xff;  // extract blue

        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        if (luma < 40) {
            $(`#${id}-label`).css("color", "white")
        } else {
            $(`#${id}-label`).css("color", "black")
        }

        $(`#${id}-label`).css("opacity", "100%")
    }, event => {
        event.preventDefault()

        const id = event.currentTarget.id

        if ($(`#${id}-label`).attr("data-keep") == "true") return

        $(`#${id}-label`).css("opacity", "0%")
    })

    $().tou

    $(".palette-color").on("click", event => {
        event.preventDefault()

        const id = event.currentTarget.id

        const rgb = parseInt(id, 16);   // convert rrggbb to decimal
        const r = (rgb >> 16) & 0xff;  // extract red
        const g = (rgb >>  8) & 0xff;  // extract green
        const b = (rgb >>  0) & 0xff;  // extract blue

        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        if (luma < 40) {
            $(`#${id}-label`).css("color", "white")
        } else {
            $(`#${id}-label`).css("color", "black")
        }

        $(`#${id}-label`).css("opacity", "100%")

        $(`#${id}-label`).attr("data-keep", "true")

        setTimeout(() => {
            $(`#${id}-label`).css("opacity", "0%")
            $(`#${id}-label`).attr("data-keep", "false")
        }, 5000);
    })
}