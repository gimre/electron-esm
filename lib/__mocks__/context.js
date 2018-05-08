
const { app, protocol } = require( 'electron' )

module.exports = {
    get: ( ) => ( { app, protocol } ),
    set: jest.fn( )
}
