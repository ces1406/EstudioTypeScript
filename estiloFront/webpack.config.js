const path = require('path');

module.exports={
    entry:'./src/clases.ts',
    devtool:'eval-source-map',
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include:[path.resolve(__dirname,'src')]
            }
        ]
    },
    resolve : {
        extensions:['.ts','.js']
    },
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'public')
    },
    mode : 'development'
}