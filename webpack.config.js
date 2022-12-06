const path = require('path')

module.exports = {
    mode: 'development',
    entry: './firebase.js',
    output: {
        path: path.resolve(__dirname, 'functions'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: ['style-loader', 'css-loade+r', 'sass-loader'],
                exclude: [/node_modules/],
              },
        ],
      },    
        
    watch: true
}