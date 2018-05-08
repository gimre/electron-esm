
module.exports = {
    app: {
        isReady: jest.fn( ),
        on: jest.fn( ( _, cb ) => cb( ) )
    },
    protocol: {
        registerBufferProtocol: jest.fn( ( _, cb ) => cb( ) ),
        registerStandardSchemes: jest.fn( )
    }
}
