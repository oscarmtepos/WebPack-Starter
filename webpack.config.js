const HtmlWebPack    = require('html-webpack-plugin')
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require("copy-webpack-plugin");



module.exports = {
    mode: 'development', // comillas sencillas

    output: {
         clean: true
    },

    module: {
        rules: [      //verifica las comas despues del argumento coño
            {
                test: /\.html$/, //encuentra el HTML
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/, //encuentra el css
                exclude: /styles.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebPack({
            title: 'Mi WebPack App', // entre parentesis y llave
            filename: 'index.html',
            template: './src/index.html'//ARCHIVO EN EL CUAL SE VA A BASAR
        }),

        new MiniCssExtract({
            filename: 'styles.css',
            ignoreOrder: false
        }),
        new CopyPlugin({
           patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]        
            })
            
    ]
}