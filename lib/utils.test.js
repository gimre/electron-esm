
jest.mock( './context' )

const {
    normalizeExtension,
    registerStandardProtocol
} = require( './utils' )

describe( 'normalizeExtension', ( ) => {
    test( 'add extension if it isn\'t there', ( ) => {
        expect( normalizeExtension( '/a/b', '.ext' ) ).toBe( '/a/b.ext' )
    } )

    test( 'preserve extension if it is already there', ( ) => {
        expect( normalizeExtension( '/a/b.ext', '.ext' ) ).toBe( '/a/b.ext' )
    } )
} )

describe( 'registerStandardProtocol', ( ) => {
    test( 'adds extension if it isn\'t there', ( ) => {
        const scheme = 'a-protocol'
        const handler = jest.fn( )
        const { app, protocol } = require( 'electron' )

        registerStandardProtocol( scheme, handler )
        expect( protocol.registerBufferProtocol.mock.calls.pop( ) ).toContain( scheme )
        expect( protocol.registerStandardSchemes ).toHaveBeenCalledWith( [ scheme ] )
    } )
} )