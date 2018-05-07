
const path = require( 'path' )

module.exports = {
    DEFAULT_OPTIONS: {
        cjsProtocol: 'cjs',
        esmProtocol: 'esm',
        root: './'
    },
    ERR_APP_ALREADY_READY: 'you can only use electron-esm before app.ready',
    ERR_FILE_NOT_FOUND: -6,
    ERR_NOT_MAIN_PROCESS: 'you can only use electron-esm in the main process',
    MIME_TYPE: 'text/javascript',
    MODULE_DIR: path.dirname( require.main.filename ),
    PROCESS_TYPE_MAIN: 'browser'
}
