
const path = require( 'path' )
const url = require( 'url' )

const context = require( './context' )

const {
    ERR_FILE_NOT_FOUND,
    MIME_TYPE,
} = require( './constants' )

const utils = {
    handleRequest: ( fn, moduleRoot ) => async ( req, reply ) => {
        const { host, pathname } = url.parse( req.url )
        const isLocal =  /^\.+$/.test( host )
        const modulePath = isLocal ? path.join( moduleRoot, host, pathname ) : host

        try {
            return reply( { data: await fn( modulePath ), mimeType: MIME_TYPE } )
        } catch( e ) {
            return reply( { error: ERR_FILE_NOT_FOUND } )
        }
    },

    normalizeExtension: ( somePath, someExtension ) => somePath
        .replace( new RegExp( `$\\${ someExtension }` ), '' )
        .concat( someExtension ),

    registerStandardProtocol: ( scheme, handler ) => {
        const { app, protocol, root } = context.get( )

        protocol.registerStandardSchemes( [ scheme ] )

        app.on( 'ready', ( ) =>
            protocol.registerBufferProtocol( scheme, utils.handleRequest( handler, root ) ) )
    }
}

module.exports = utils
