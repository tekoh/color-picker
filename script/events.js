function bindSavedEvent() {
    $(".saved-color").unbind().hover(event => {
        event.preventDefault()

        const id = event.currentTarget.id

        const rgb = parseInt(id, 16);   // convert rrggbb to decimal
        const r = (rgb >> 16) & 0xff;  // extract red
        const g = (rgb >>  8) & 0xff;  // extract green
        const b = (rgb >>  0) & 0xff;  // extract blue

        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

        console.log(luma)

        if (luma < 40) {
            $(`#${id}-label`).css("color", "white")
            console.log("white")
        } else {
            $(`#${id}-label`).css("color", "black")
            console.log("black")
        }

        $(`#${id}-label`).css("opacity", "100%")
    }, event => {
        event.preventDefault()

        const id = event.currentTarget.id

        $(`#${id}-label`).css("opacity", "0%")
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

        console.log(luma)

        if (luma < 40) {
            $(`#${id}-label`).css("color", "white")
            console.log("white")
        } else {
            $(`#${id}-label`).css("color", "black")
            console.log("black")
        }

        $(`#${id}-label`).css("opacity", "100%")
    }, event => {
        event.preventDefault()

        const id = event.currentTarget.id

        $(`#${id}-label`).css("opacity", "0%")
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

        console.log(luma)

        if (luma < 40) {
            $(`#${id}-label`).css("color", "white")
            console.log("white")
        } else {
            $(`#${id}-label`).css("color", "black")
            console.log("black")
        }

        $(`#${id}-label`).css("opacity", "100%")
    }, event => {
        event.preventDefault()

        const id = event.currentTarget.id

        $(`#${id}-label`).css("opacity", "0%")
    })
}