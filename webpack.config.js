const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = {
    mode: "production",
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                include: /\.min\.js$/
            }),
        ]
    }
}

const config = Object.assign({}, baseConfig, {
    entry: {
        "blobity": "./src/entry.ts",
        "blobity.min": "./src/entry.ts",
    },
    output: {
        path: __dirname + "/dist/",
        library: "Blobity",
        libraryTarget: "umd",
        filename: "[name].js",
    },
});
const docsConfig = Object.assign({}, baseConfig, {
    entry: {
        "blobity": "./src/entry.ts",
        "blobity.min": "./src/entry.ts",
    },
    output: {
        path: __dirname + "/site/public",
        library: "Blobity",
        libraryTarget: "umd",
        filename: "[name].js",
    },
    devtool: 'eval-cheap-source-map',
});

module.exports = [config, docsConfig];
