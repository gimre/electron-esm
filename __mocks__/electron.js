
module.exports = {
    app: {
        on: jest.fn( ( event, cb ) => cb( ) )
    },
    protocol: {
        registerBufferProtocol: jest.fn( ),
        registerStandardSchemes: jest.fn( )
    }
}
