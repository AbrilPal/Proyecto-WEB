module.exports =
{
    mode: "development",
    module: {
        rules: [
            {
                test:/\.jsx?$/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devServer: {
        contentBase: 'dist',
        port: 3000,
        overlay: true
    },
}