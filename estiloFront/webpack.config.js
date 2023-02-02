const path = require('path');

module.exports={
    entry:'./src/index.ts',
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
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'public')
    },
    mode : 'development'
}
resolve={
    extensions:['.ts','.js']
}