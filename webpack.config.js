const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/App.js',
  devtool: 'eval', // debugging/source-maps
  devServer: {
    publicPath: '/public',
    historyApiFallback: true // re-route 404s to homepage
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  // transforms to apply
  module: {
    rules: [
      {
        enforce: 'pre', // do this before other rules
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/, // could also do Sass and Less here
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false // don't inline assets
            }
          }
        ]
      }
    ]
  }
}
