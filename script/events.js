function bindSavedEvent() {
    $(".saved-color").unbind().hover(event => {
        event.preventDefault()

        const id = event.currentTarget.id

        const luminance = getLuminance()

        $(`#${id}-label`).css("opacity", "100%")
    }, event => {
        event.preventDefault()

        const id = event.currentTarget.id

        $(`#${id}-label`).css("opacity", "0%")
    })
}