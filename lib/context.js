
let context

module.exports = {
    set: ( values ) => {
        context = { ... values }
    },

    get: ( ) => {
        return context
    }
}
