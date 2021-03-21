const Data = class {
    /**
     * @returns {Data}
     * @param {Array<String>} favourites
     * @param {Array<String>} history
     */
    constructor(favourites, history) {
        this.favourites = favourites
        this.history = history

        return this
    }

    /**
     * @param {String} hex colour to add to favourites
     */
    addToFavourites(hex) {
        this.favourites.unshift(hex)
    }

    /**
     * @returns {Array<String>}
     */
    getFavourites() {
        return this.favourites
    }

    /**
     * @param {String} hex
     * @returns {Boolean}
     */
    isFavourite(hex) {
        const index = this.favourites.indexOf(hex)

        if (index != -1) {
            return true
        } else {
            return false
        }
    }

    /**
     * @param {String} hex
     */
    removeFromFavourites(hex) {
        const index = this.favourites.indexOf(hex)

        if (index != -1) {
            this.favourites.splice(index, 1)
        }
    }

    deleteAllFavourites() {
        this.favourites = []
    }

    /**
     * @param {String} hex
     */
    addToHistory(hex) {
        const index = this.history.indexOf(hex)

        if (!hex.startsWith("#") || hex.length != 7) return

        if (index != -1) {
            this.history.splice(index, 1)
            $(`${hex}-history`).remove()
        }

        if (this.history.length >= 75) {
            this.history.pop()
        }

        this.history.unshift(hex)
    }

    /**
     * @returns {Array<String>}
     */
    getHistory() {
        return this.history
    }

    
    clearHistory() {
        this.history = []
    }

    /**
     * @returns {String}
     */
    save() {
        const date = new Date()

        const expire = date.setDate(date.getDate() + 90)

        const cookie = `c=${this.favourites.join("|")}/\\${this.history.join("|")}; expires=${new Date(expire).toUTCString()}; path=/`

        document.cookie = cookie

        console.log("updated cookie 🍪")

        return cookie
    }

    /**
     * @returns {Data}
     */
    static fromCookie() {
        const cookie = document.cookie

        if (cookie == "") {
            console.log("creating new data instance")
            return new Data([], [])
        }

        let favourites = cookie.substr(2, cookie.length)

        favourites = favourites.split("/\\")[0]

        favourites = favourites.split("|")

        if (favourites.indexOf("") != -1) {
            favourites.splice(favourites.indexOf(""))
        }

        let history = cookie.split("/\\")[1]

        history = history.split("|")

        if (history.indexOf("") != -1) {
            history.splice(history.indexOf(""))
        }

        return new Data(favourites, history)
    }
    
}