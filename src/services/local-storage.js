export default new class LocalStorage {

    getItem (key, parse = true) {
        return parse
            ? JSON.parse(localStorage.getItem(key))
            : localStorage.getItem(key)
    }

    setItem (key, item, stringify = true) {
        localStorage.setItem(
            key,
            stringify ? JSON.stringify(item) : item
        )
    }
}
