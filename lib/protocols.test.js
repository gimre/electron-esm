
const { handleCjs, handleEsm } = require( './protocols' )

describe( 'cjs handler', ( ) => {
    test( 'returns a Buffer', async ( ) => {
        const result = await handleCjs( 'fake-module' )
        expect( result.constructor ).toBe( Buffer )
    } )

    test( 'returns an ES module wrapper', async ( ) => {
        const result = await handleCjs( 'fake-module' )
        expect( result.toString( ) ).toMatchSnapshot( )
    } )
} )
