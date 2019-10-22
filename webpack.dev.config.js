const path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9000,
        open: true
    },
}
