function bindSavedEvent() {
    $(".saved-color").unbind().hover(event => {
        const id = event.currentTarget.id

        const luminance = getLuminance()

        $(`#${id}-label`).css("opacity", "100%")
    }, event => {
        const id = event.currentTarget.id

        $(`#${id}-label`).css("opacity", "0%")
    })
}