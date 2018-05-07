
const fs = require( 'fs' )
const { normalizeExtension } = require( './utils' )

module.exports = {
    handleCjs: async ( modulePath ) => Buffer.from( `
        const exports = require( '${ modulePath }' )
        export default exports.default || exports
    ` ),

    handleEsm: async ( modulePath ) => new Promise( ( y ) =>
        fs.readFile( normalizeExtension( modulePath, '.mjs' ), ( err, data ) =>
            err ? n( err ) : y( data )
        )
    )
}
