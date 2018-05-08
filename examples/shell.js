
const [ exampleFolder ] = process.argv.slice( 2 )

if( ! exampleFolder ) {
    throw 'no example passed'
}

const path = require( 'path' )
const { app, BrowserWindow } = require( 'electron' )
const enableModules = require( '../index.js' )

const root = path.join( __dirname, exampleFolder )

enableModules( { root } )

app
.on( 'window-all-closed', ( ) => app.quit( ) )
.on( 'ready', ( ) => {
    const win = new BrowserWindow( )
    win.loadFile( path.join( root, 'index.html' ) )
    win.openDevTools( )
} )