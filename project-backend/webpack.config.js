const path = require('path')
const nodeExternals = require('webpack-node-externals')

const entry = [
  path.resolve(path.join(__dirname, './app.js'))
]
module.exports = {
  mode: 'development',
  devtool: false,
  externals: [
    nodeExternals()
  ],
  name: 'server',
  // plugins: plugins,
  target: 'node',
  entry: entry,
  output: {
    publicPath: './',
    path: path.resolve(__dirname, './'),
    filename: 'build.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ],
    alias: {
      '@root': __dirname,
      '@modules': path.join(__dirname, 'app/modules'),
      '@models': path.join(__dirname, '/app/models')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        enforce: 'pre',
        include: [path.resolve(__dirname, 'app')]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      }
    ]
  },
  node: {
    console: false,
    global: true,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
}
