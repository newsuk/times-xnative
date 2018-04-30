module.exports = ({ platform }, {module}) => ({
  context: __dirname + "/js",
  entry: `./index.${platform}.js`,
  module: {
    ...module,
    rules: [
      {
        test: /\.js?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      ...module.rules
    ]
  }
});
