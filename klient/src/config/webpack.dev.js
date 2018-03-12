var webpackConfig = require('./webpack.config.js');

module.exports = Object.assign(webpackConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'dist',
        historyApiFallback: true,
        port:9000,
        proxy : {
        		"/api/**" : {
        			target : "http://localhost:8080",
        			secure : false
        		}
        	}
    }
});
