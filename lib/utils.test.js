
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

        const registerBufferProtocol =
            jest.spyOn( protocol, 'registerBufferProtocol' )

        const registerStandardSchemes =
            jest.spyOn( protocol, 'registerStandardSchemes' )

        registerStandardProtocol( scheme, handler )
        expect( registerBufferProtocol ).toBe( scheme )
        expect( registerStandardSchemes ).toHaveBeenCalledWith( [ scheme ] )
    } )
} )