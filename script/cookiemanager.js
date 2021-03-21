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
        const index = this.favourites.indexOf(index)

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
        const index = this.favourites.indexOf(index)

        if (index != -1) {
            this.favourites.splice(index, 1)
        }
    }

    /**
     * @param {String} hex
     */
    addToHistory(hex) {
        const index = this.history.indexOf(hex)

        if (index != -1) {
            this.history.splice(index, 1)
        }

        if (this.history.length >= 75) {
            this.history.pop()
        }

        this.history.unshift(hex)

        console.log(this.history)
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

        console.log(cookie)

        let favourites = cookie.substr(2, cookie.length)

        favourites = favourites.split("/\\")[0]

        favourites = favourites.split("|")

        if (favourites.indexOf("") != -1) {
            favourites.splice(favourites.indexOf(""))
        }

        let history = cookie.split("/\\")[1]

        console.log("history1: ", history)

        history = history.split("|")

        console.log("history3: ", history)

        if (history.indexOf("") != -1) {
            history.splice(history.indexOf(""))
        }

        return new Data(favourites, history)
    }
    
}