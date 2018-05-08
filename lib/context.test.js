
const context = require( './context' )

const newValue = { A: Symbol( ), B: Symbol( ), C: Symbol( ) }

test( 'set value', ( ) => {
    context.set( newValue )
    expect( context.get( ) ).toEqual( newValue )
} )
