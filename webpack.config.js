module.exports = {
    entry: './src/index.js',
    output: {
        path:__dirname + '/public',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react', 'stage-2'],
                    plugins: ["transform-object-rest-spread"]
                }
            }
        ]
    }
};