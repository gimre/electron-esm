
const { MODULE_DIR, ... constants } = require( './constants' )

test( 'are set correctly', ( ) => {
    expect( constants ).toMatchSnapshot( )
} )