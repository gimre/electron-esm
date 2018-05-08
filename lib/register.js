
const context = require( './context' )
const { handleCjs, handleEsm } = require( './protocols' )
const { registerStandardProtocol, resolve } = require( './utils' )

const {
    DEFAULT_OPTIONS,
    ERR_APP_ALREADY_READY,
    ERR_NOT_MAIN_PROCESS,
    MODULE_DIR,
    PROCESS_TYPE_MAIN
} = require( './constants' )

module.exports = ( options = { } ) => {
    if( process.type !== PROCESS_TYPE_MAIN ) {
        throw new Error( ERR_NOT_MAIN )
    }

    const { app, protocol } = require( 'electron' )
    if( app.isReady() ) {
        throw new Error( ERR_APP_ALREADY_READY )
    }

    const finalOptions = { ... DEFAULT_OPTIONS, ... options }
    finalOptions.root = resolve( MODULE_DIR, finalOptions.root )
    context.set( { ... finalOptions, app, protocol } )

    const { cjsProtocol, esmProtocol } = context.get( )
    registerStandardProtocol( cjsProtocol, handleCjs )
    registerStandardProtocol( esmProtocol, handleEsm )

    return app
}
