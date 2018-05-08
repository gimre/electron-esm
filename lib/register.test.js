
// const path = require( 'path' )
// const electronPath = require( 'electron' )
// const { Application } = require( 'spectron' )
// const registerModules = require( './register' )

// let app
// beforeAll( async ( ) => {
//     app = new Application( {
//         path: electronPath,
//         args: [ path.join( __dirname, '../fixtures/main.js' ) ]
//     } )

//     return app.start( )
// }, 0 )

// afterAll( async ( ) => app && app.isRunning( ) && app.stop( ) )

// test( 'is a function', ( ) => {
//     expect( typeof registerModules ).toBe( 'function' )
// } )

// test( 'renders correctly', async ( ) => {
//     const logs = await app.client.getMainProcessLogs( )
//     const text = await app.client.getText( 'body' )
//     console.log( logs )
//     expect( text ).toBe( 'hai thar!' )
// } )
