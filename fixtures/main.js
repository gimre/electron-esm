
const path = require( 'path' )
const { app, BrowserWindow } = require( 'electron' )
const enableModules = require( '../index.js' )

enableModules( { root: './src' } )

app
.on( 'window-all-closed', ( ) => app.quit( ) )
.on( 'ready', ( ) => {
    const win = new BrowserWindow( )
    win.loadFile( path.join( __dirname, 'main.html' ) )
    if( process.env.NODE_ENV !== 'test' ) {
        win.openDevTools( )
    }
} )