

const { ERR_APP_ALREADY_READY, ERR_NOT_MAIN_PROCESS } = require( './constants' )
const registerModules = require( './register' )

let app
beforeAll( async ( ) => {
    jest.resetModuleRegistry( )
    jest.unmock( 'electron' )

    const path = require( 'path' )
    const electronPath = require( 'electron' )
    const { Application } = require( 'spectron' )

    app = new Application( {
        path: electronPath,
        args: [ path.join( __dirname, '../fixtures/main.js' ) ]
    } )

    return app.start( )
}, 0 )

afterAll( async ( ) => app && app.isRunning( ) && app.stop( ) )

test( 'is a function', ( ) => {
    expect( typeof registerModules ).toBe( 'function' )
} )

test( 'throws if not main process', ( ) => {
    Object.defineProperty( process, 'type', {
        configurable: true,
        value: 'not-good'
    } )

    expect( registerModules ).toThrow( ERR_NOT_MAIN_PROCESS )
} )

// test( 'throws if app already ready', ( ) => {
//     const { app } = require.requireMock( 'electron' )
//     const mock = app.isReady
//         .mockReturnValue( true )

//     Object.defineProperty( process, 'type', {
//         configurable: true,
//         value: 'browser'
//     } )

//     jest.mock( 'electron' )
//     jest.resetModules( )

//     expect( registerModules ).toThrow( ERR_APP_ALREADY_READY )

//     jest.unmock( 'electron' )
// } )

test( 'renders correctly', async ( ) => {
    const text = await app.client.getText( 'body' )
    expect( text ).toBe( 'hai thar!' )
} )
